// AppShell.tsx
import React, { FC, useState, useMemo } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { BaseTemplate } from 'templates'
import { ManageableSidebar, NavigationContainer, ManageableBreadcrumbs, BackLink } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'

export type TChromeCtx = {
  setCurrentTags: (tags?: string[]) => void
  setSidebarSuffix: (suffix?: string) => void
  setBreadcrumbsSuffix: (suffix?: string) => void
  setBacklinkTo: (backlinkTo?: string) => void
  setBacklinkTitle: (backlinkTitle?: string) => void
}

export const AppShell: FC<{ inside?: boolean }> = ({ inside }) => {
  const { namespace, syntheticProject } = useParams()

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const [currentTags, setCurrentTagsState] = useState<string[] | undefined>()
  const [sidebarSuffix, setSidebarSuffix] = useState<string | undefined>()
  const [breadcrumbsSuffix, setBreadcrumbsSuffix] = useState<string | undefined>()
  const [backlinkTo, setBacklinkTo] = useState<string | undefined>()
  const [backlinkTitle, setBacklinkTitle] = useState<string | undefined>()

  // Commit tags only on actual content change to avoid sidebar refetch
  const setCurrentTags = React.useCallback((next?: string[]) => {
    setCurrentTagsState(prev => {
      // eslint-disable-next-line one-var
      const a = prev ?? [],
        b = next ?? []
      if (a.length === b.length && a.every((v, i) => v === b[i])) return prev
      return next
    })
  }, [])

  const sidebarId = useMemo(
    () =>
      `${getSidebarIdPrefix({ instance: !!syntheticProject, project: !!namespace, inside })}${
        sidebarSuffix ?? 'app-shell'
      }`,
    [syntheticProject, namespace, inside, sidebarSuffix],
  )

  const breadcrumbsId = useMemo(
    () =>
      `${getBreadcrumbsIdPrefix({ instance: !!syntheticProject, project: !!namespace, inside })}${
        breadcrumbsSuffix ?? 'app-shell'
      }`,
    [syntheticProject, namespace, inside, breadcrumbsSuffix],
  )

  const sidebarEl = React.useMemo(
    () => (
      <ManageableSidebar
        instanceName={possibleInstance}
        projectName={possibleProject}
        idToCompare={sidebarId}
        currentTags={currentTags}
      />
    ),
    [possibleInstance, possibleProject, sidebarId, currentTags],
  )

  const ctx = useMemo<TChromeCtx>(
    () => ({
      setCurrentTags,
      setSidebarSuffix,
      setBreadcrumbsSuffix,
      setBacklinkTo,
      setBacklinkTitle,
    }),
    [setCurrentTags],
  )

  return (
    <BaseTemplate inside={inside} sidebar={sidebarEl}>
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside={inside} />
        {backlinkTo && backlinkTitle && <BackLink to={backlinkTo} title={backlinkTitle} />}
      </NavigationContainer>
      <Outlet context={ctx} />
    </BaseTemplate>
  )
}
