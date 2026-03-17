import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import type { TRbacQueryPayload, TRbacQueryResponse } from 'localTypes/rbacGraph'

const RBAC_GRAPH_API_URL = '/api/clusters/default/k8s/apis/rbacgraph.incloud.io/v1alpha1/rolegraphreviews'

export const useRbacGraphQuery = () =>
  useMutation({
    mutationFn: async (payload: TRbacQueryPayload): Promise<TRbacQueryResponse> => {
      const { data } = await axios.post(RBAC_GRAPH_API_URL, payload)
      return {
        graph: data.status.graph,
        stats: {
          matchedRoles: data.status.matchedRoles,
          matchedBindings: data.status.matchedBindings,
          matchedSubjects: data.status.matchedSubjects,
        },
      }
    },
  })
