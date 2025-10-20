import { useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebouncedCallback = <T extends (...args: any[]) => void>(fn: T, delay = 300) => {
  const timer = useRef<number | undefined>(undefined)
  return (...args: Parameters<T>) => {
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => fn(...args), delay)
  }
}

// Convert between array<string> and a single comma-separated query param.
export const getArrayParam = (sp: URLSearchParams, key: string): string[] => {
  const raw = sp.get(key)
  if (!raw) return []
  return raw
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
}

export const setArrayParam = (sp: URLSearchParams, key: string, values: string[] | undefined | null) => {
  const next = new URLSearchParams(sp) // preserve other params
  if (!values || values.length === 0) {
    next.delete(key)
  } else {
    next.set(key, values.join(','))
  }
  return next
}

export const getStringParam = (sp: URLSearchParams, key: string): string => {
  return sp.get(key) ?? ''
}

export const setStringParam = (sp: URLSearchParams, key: string, value: string | undefined | null) => {
  const next = new URLSearchParams(sp) // preserve other params
  const v = (value ?? '').trim()
  if (!v) next.delete(key)
  else next.set(key, v)
  return next
}

export const getTypeParam = (sp: URLSearchParams, key: string): 'name' | 'labels' | 'fields' | undefined => {
  const v = sp.get(key)?.trim()
  if (v === 'name' || v === 'labels' || v === 'fields') return v
  return undefined
}

export const setTypeParam = (sp: URLSearchParams, key: string, value: string | undefined | null) => {
  const next = new URLSearchParams(sp)
  const v = (value ?? '').trim()
  if (v !== 'name' && v !== 'labels' && v !== 'fields') {
    next.delete(key)
  } else {
    next.set(key, v)
  }
  return next
}
