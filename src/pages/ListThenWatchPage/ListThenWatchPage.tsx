/* eslint-disable no-void */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useState, FC } from 'react'
import { useListWatch, TUseListWatchQuery } from '@prorobotech/openapi-k8s-toolkit'

export const ListThenWatchPage: FC = () => {
  const [queryState, setQueryState] = useState<TUseListWatchQuery>({
    apiGroup: '',
    apiVersion: 'v1',
    plural: 'pods',
    namespace: 'incloud-web',
  })

  const { state, total, status, lastError, reconnect } = useListWatch({
    wsUrl: '/api/clusters/default/openapi-bff-ws/listThenWatch/listWatchWs',
    paused: false,
    ignoreRemove: false,
    autoDrain: true,
    preserveStateOnUrlChange: true,
    isEnabled: true,
    query: queryState,
  })

  const switchNamespace = (ns: string) => {
    setQueryState(prev => ({
      ...prev,
      namespace: ns,
      initialContinue: undefined,
    }))
  }

  if (status === 'connecting') {
    return <div>🔄 Connecting to API server…</div>
  }

  if (status === 'closed' && lastError) {
    return <div className="text-red-600">⚠️ Error: {lastError}</div>
  }

  if (status === 'closed') {
    return (
      <div>
        ❌ Connection closed. <button onClick={reconnect}>Retry</button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <header className="mb-3 flex gap-2 items-center">
        <span>
          Status: <b>{status}</b>
        </span>
        {lastError && <span className="text-red-600">• {lastError}</span>}
        <button onClick={() => reconnect()} className="px-2 py-1 border rounded">
          Reconnect
        </button>
        <button onClick={() => switchNamespace('kube-system')} className="px-2 py-1 border rounded">
          kube-system
        </button>
        <span className="ml-auto">Total: {total}</span>
      </header>

      <ul className="space-y-1">
        {state.order.map(key => {
          const res = state.byKey[key]
          const name = res.metadata?.name ?? key
          const ns = res.metadata?.namespace ?? ''
          return (
            <li key={key} className="border rounded p-2">
              <div className="text-sm">
                {ns}/{name}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
