import { FC, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_API_VERSION,
  BASE_PROJECTS_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

export const RedirectProjectList: FC = () => {
  const { cluster } = useParams()
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  navigate(
    `${baseprefix}/${cluster}/api-table/${BASE_PROJECTS_API_GROUP}/${BASE_PROJECTS_API_VERSION}/${BASE_PROJECTS_PLURAL}`,
  )

  useEffect(() => {
    navigate(
      `${baseprefix}/${cluster}/api-table/${BASE_PROJECTS_API_GROUP}/${BASE_PROJECTS_API_VERSION}/${BASE_PROJECTS_PLURAL}`,
    )
  }, [cluster, baseprefix, navigate])

  return null
}
