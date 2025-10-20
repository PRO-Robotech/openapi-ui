import { useLocation, matchPath } from 'react-router-dom'

export const useIsSearchPage = (prefix: string) => {
  const { pathname } = useLocation()
  const base = `/${prefix}`.replace(/\/{2,}/g, '/').replace(/\/$/, '')
  const pattern = `${base}/:clusterName/:namespace?/:syntheticProject?/search/*`

  return Boolean(matchPath({ path: pattern }, pathname))
}
