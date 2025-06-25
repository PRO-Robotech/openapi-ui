export const getSidebarIdPrefix = ({
  project,
  instance,
  namespace,
  inside,
}: {
  project?: boolean
  instance?: boolean
  namespace?: boolean
  inside?: boolean
}): string => {
  let result = inside ? 'inside-' : 'stock-'

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
