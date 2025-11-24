import { FC, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

export const RedirectProjectInfo: FC = () => {
  const { cluster, namespace } = useParams()
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  navigate(`${baseprefix}/${cluster}/${namespace}/factory/project/${namespace}`)

  useEffect(() => {
    navigate(`${baseprefix}/${cluster}/${namespace}/factory/project/${namespace}`)
  }, [cluster, namespace, baseprefix, navigate])

  return null
}
