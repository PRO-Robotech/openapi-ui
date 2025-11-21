import {
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_API_VERSION,
  BASE_INSTANCES_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

export const getFormsBackLink = ({
  backLink,
  cluster,
  possibleProject,
  possibleInstance,
  baseprefix,
  namespacesMode,
}: {
  backLink?: string | null
  cluster?: string
  possibleProject?: string
  possibleInstance?: string
  baseprefix?: string
  namespacesMode?: boolean
}): string => {
  if (backLink) {
    return backLink
  }

  if (possibleInstance) {
    return `${baseprefix}/${cluster}/${possibleInstance}/${possibleProject}/api-table/apps/v1/deployments`
  }

  if (namespacesMode) {
    return `${baseprefix}/${cluster}/builtin-table/namespaces`
  }

  if (possibleProject) {
    return `${baseprefix}/clusters/${cluster}/projects/${possibleProject}`
  }

  return `${baseprefix}/clusters`
}

export const getTablesBackLink = ({
  cluster,
  possibleProject,
  possibleInstance,
  namespace,
  baseprefix,
  inside,
  namespacesMode,
}: {
  cluster?: string
  possibleProject?: string
  possibleInstance?: string
  namespace?: string
  baseprefix?: string
  inside?: boolean
  namespacesMode?: boolean
}): string => {
  if (inside) {
    return `${baseprefix}/inside/${cluster}${namespace ? `/${namespace}` : ''}/apis`
  }

  if (possibleInstance) {
    return `${baseprefix}/${cluster}/${possibleProject}/api-table/${BASE_INSTANCES_API_GROUP}/${BASE_INSTANCES_API_VERSION}/${BASE_INSTANCES_PLURAL}`
  }

  if (namespacesMode) {
    return `${baseprefix}/${cluster}/builtin-table/namespaces`
  }

  if (possibleProject) {
    return `${baseprefix}/clusters/${cluster}/projects/${possibleProject}`
  }

  return `${baseprefix}/clusters`
}
