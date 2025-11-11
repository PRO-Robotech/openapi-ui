export const getSidebarIdPrefix = ({
  project,
  instance,
  namespace,
  inside,
  useOnlyNamespace,
}: {
  project?: boolean
  instance?: boolean
  namespace?: boolean
  inside?: boolean
  useOnlyNamespace?: boolean
}): string => {
  let result = inside ? 'inside-' : 'stock-'

  if (instance && !useOnlyNamespace) {
    result += 'instance-'
  } else if (project && !useOnlyNamespace) {
    result += 'project-'
  } else if (namespace) {
    result += 'namespace-'
  } else {
    result += 'cluster-'
  }

  return result
}
