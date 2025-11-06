import { TSingleResource, TJSON } from '@prorobotech/openapi-k8s-toolkit'

export const getDataItems = ({
  resourceType,
  dataBuiltin,
  dataApi,
}: {
  resourceType: 'builtin' | 'api'
  dataBuiltin?: TSingleResource[]
  dataApi?: TSingleResource[]
}): TJSON[] => {
  return resourceType === 'builtin' ? dataBuiltin || [] : dataApi || []
}
