import React, { FC } from 'react'
import { Flex, theme } from 'antd'
import { useParams } from 'react-router-dom'
import { HEAD_SECOND_ROW } from 'constants/blocksSizes'
import { MF_PLUGINS_NO_CLUSTER, BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { PluginByManifest } from 'components/molecules'
import { SelectorCluster, SelectorClusterInside, Selector, SelectorInside, SelectorNamespace } from './organisms'
import { Styled } from './styled'

type THeaderProps = {
  inside?: boolean
  isSearch?: boolean
}

export const HeaderSecond: FC<THeaderProps> = ({ inside, isSearch }) => {
  const { projectName, instanceName, cluster, namespace, syntheticProject } = useParams()
  const { token } = theme.useToken()

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  if (Object.keys(MF_PLUGINS_NO_CLUSTER).includes('plugin-navigation')) {
    return <PluginByManifest manifestEntry={MF_PLUGINS_NO_CLUSTER['plugin-navigation']} />
  }

  return (
    <Styled.BackgroundContainer $bgColor={token.colorFillSecondary} $borderRadius={token.borderRadius}>
      <Styled.PaddingContainer $height={HEAD_SECOND_ROW}>
        <Flex gap={18}>
          {inside ? <SelectorClusterInside cluster={cluster} /> : <SelectorCluster cluster={cluster} />}
          {inside && <SelectorInside cluster={cluster} namespace={namespace} />}
          {!inside && !isSearch && BASE_USE_NAMESPACE_NAV !== 'true' && (
            <Selector
              cluster={cluster}
              projectName={projectName || possibleProject}
              instanceName={instanceName || possibleInstance}
            />
          )}
          {!inside && (isSearch || BASE_USE_NAMESPACE_NAV === 'true') && (
            <SelectorNamespace cluster={cluster} namespace={namespace} />
          )}
        </Flex>
      </Styled.PaddingContainer>
    </Styled.BackgroundContainer>
  )
}
