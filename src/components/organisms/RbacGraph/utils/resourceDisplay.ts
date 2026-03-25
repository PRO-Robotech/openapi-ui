import type { TKindWithVersion } from '@prorobotech/openapi-k8s-toolkit'

type TResolveResourceDisplayArgs = {
  apiGroups?: string[]
  kindsWithVersion: TKindWithVersion[]
  value: string
}

const normalizeValue = (value: string) => value.trim().toLowerCase()

const sortKinds = (left: TKindWithVersion, right: TKindWithVersion) => {
  if (left.version.preferred !== right.version.preferred) {
    return left.version.preferred ? -1 : 1
  }

  return left.kind.localeCompare(right.kind)
}

export const shouldShowResolvedResourceBadge = (value: string) => {
  const trimmedValue = value.trim()

  return Boolean(trimmedValue) && trimmedValue !== '*' && !trimmedValue.startsWith('/')
}

export const resolveResourceDisplayValue = ({
  apiGroups,
  kindsWithVersion,
  value,
}: TResolveResourceDisplayArgs): string => {
  const trimmedValue = value.trim()

  if (!trimmedValue || trimmedValue.includes('/') || trimmedValue.includes('*')) {
    return trimmedValue
  }

  const normalizedApiGroups = Array.from(
    new Set((apiGroups ?? []).map(group => group.trim()).filter(group => group.length > 0 && group !== '*')),
  )
  const normalizedValue = normalizeValue(trimmedValue)
  const matchingKinds = kindsWithVersion
    .filter(kind => normalizeValue(kind.version.resource) === normalizedValue)
    .filter(kind => normalizedApiGroups.length === 0 || normalizedApiGroups.includes(kind.group))
    .sort(sortKinds)

  return matchingKinds[0]?.kind ?? trimmedValue
}
