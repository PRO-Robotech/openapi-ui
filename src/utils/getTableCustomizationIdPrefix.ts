import { SEARCH_TABLE_CUSTOMIZATION_PREFIX } from 'constants/customizationApiGroupAndVersion'

export const getTableCustomizationIdPrefix = ({
  project,
  instance,
  namespace,
  inside,
  search,
}: {
  project?: boolean
  instance?: boolean
  namespace?: boolean
  inside?: boolean
  search?: boolean
}): string => {
  let result: string

  if (inside) {
    result = 'inside-'
  } else if (search) {
    result = SEARCH_TABLE_CUSTOMIZATION_PREFIX
  } else {
    result = 'stock-'
  }

  if (instance) {
    result += 'instance-'
  } else if (project) {
    result += 'project-'
  } else if (namespace) {
    result += 'namespace-'
  } else {
    result += 'cluster-'
  }

  return result
}
