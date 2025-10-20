import { TBuiltinResources, TApiResources, TJSON } from '@prorobotech/openapi-k8s-toolkit'

export const getDataItems = ({
  resourceType,
  dataBuiltin,
  dataApi,
}: {
  resourceType: 'builtin' | 'api'
  dataBuiltin?: TBuiltinResources
  dataApi?: TApiResources
}): TJSON[] => {
  return resourceType === 'builtin' ? dataBuiltin?.items || [] : dataApi?.items || []
}
