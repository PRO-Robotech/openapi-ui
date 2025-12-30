import _ from 'lodash'
import jp from 'jsonpath'
import { prepareTemplate } from '@prorobotech/openapi-k8s-toolkit'

export const parsePartsOfUrl = ({
  template,
  replaceValues,
}: {
  template: string
  replaceValues: Record<string, string | undefined>
}): string => {
  return prepareTemplate({ template, replaceValues })
}

type TDataMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const parseMutliqueryText = ({
  text,
  multiQueryData,
  customFallback,
}: {
  text?: string
  multiQueryData: TDataMap
  customFallback?: string
}): string => {
  if (!text) {
    return ''
  }

  // 1: req index
  // 2: comma-separated quoted keys
  // 3: optional quoted fallback
  // return text.replace(/\{reqs\[(\d+)\]\[((?:\s*['"][^'"]+['"]\s*,?)+)\]\}/g, (match, reqIndexStr, rawPath) => {
  return text.replace(
    /\{reqs\[(\d+)\]\[((?:\s*['"][^'"]+['"]\s*,?)+)\](?:\[\s*['"]([^'"]+)['"]\s*\])?\}/g,
    (_match, reqIndexStr, rawPath, fallback) => {
      try {
        const reqIndex = parseInt(reqIndexStr, 10)

        // Extract quoted keys into a path array using another regex
        // Matches: 'key', "another", 'deeply_nested'
        // Explanation:
        //   ['"]      - opening quote (single or double)
        //   ([^'"]+)  - capture group: any characters that are not quotes
        //   ['"]      - closing quote
        const path = Array.from(rawPath.matchAll(/['"]([^'"]+)['"]/g) as IterableIterator<RegExpMatchArray>).map(
          m => m[1],
        )

        // Use lodash.get to safely access deep value
        const value = _.get(multiQueryData[`req${reqIndex}`], path, fallback !== undefined ? fallback : undefined)
        if (value == null && !customFallback) {
          return fallback ?? 'Undefined with no fallback'
        }
        if (customFallback && (value === undefined || value === null)) {
          return customFallback
        }
        return String(value)
      } catch {
        return _match // fallback to original if anything fails
      }
    },
  )
}

export const parseJsonPathTemplate = ({
  text,
  multiQueryData,
  customFallback,
}: {
  text?: string
  multiQueryData: TDataMap
  customFallback?: string
}): string => {
  if (!text) return ''

  // Regex to match: {reqsJsonPath[<index>]['<jsonpath>']}
  // const placeholderRegex = /\{reqsJsonPath\[(\d+)\]\s*\[\s*(['"])([^'"]+)\2\s*\]\}/g

  // Regex to match either:
  // 1) {reqsJsonPath[<index>]['<path>']}
  // 2) {reqsJsonPath[<index>]['<path>']['<fallback>']}
  // const placeholderRegex = /\{reqsJsonPath\[(\d+)\]\s*\[\s*(['"])([^'"]+)\2\s*\](?:\s*\[\s*(['"])([^'"]*)\4\s*\])?\}/g
  const placeholderRegex =
    /\{reqsJsonPath\[(\d+)\]\s*\[\s*(['"])([\s\S]*?)\2\s*\](?:\s*\[\s*(['"])([\s\S]*?)\4\s*\])?\}/g

  return text.replace(
    placeholderRegex,
    (match, reqIndexStr, _quote, jsonPathExpr, _smth, fallback = 'Undefined with no fallback') => {
      try {
        const reqIndex = parseInt(reqIndexStr, 10)
        const jsonRoot = multiQueryData[`req${reqIndex}`]

        if (jsonRoot === undefined && !customFallback) {
          // return ''
          // no such request entry → use fallback (or empty)
          return fallback
        }
        if (jsonRoot === undefined && customFallback) {
          return customFallback
        }

        // Evaluate JSONPath and pick first result
        const results = jp.query(jsonRoot, `$${jsonPathExpr}`)
        // if (results.length === 0) {
        //   return ''
        // }
        if (results.length === 0 || results[0] == null || results[0] === undefined) {
          if (customFallback) {
            return customFallback
          }
          // no result or null → fallback
          return fallback
        }

        // Return first result as string
        return String(results[0])
      } catch {
        // On any error, leave the placeholder as-is
        return match
      }
    },
  )
}

export const parseWithoutPartsOfUrl = ({
  text,
  multiQueryData,
  customFallback,
}: {
  text: string
  multiQueryData: TDataMap
  customFallback?: string
}): string => {
  return parseJsonPathTemplate({
    text: parseMutliqueryText({
      text,
      multiQueryData,
      customFallback,
    }),
    multiQueryData,
    customFallback,
  })
}

export const parseAll = ({
  text,
  replaceValues,
  multiQueryData,
}: {
  text: string
  replaceValues: Record<string, string | undefined>
  multiQueryData: TDataMap
}): string => {
  return parsePartsOfUrl({
    template: parseJsonPathTemplate({
      text: parseMutliqueryText({
        text,
        multiQueryData,
      }),
      multiQueryData,
    }),
    replaceValues,
  })
}
