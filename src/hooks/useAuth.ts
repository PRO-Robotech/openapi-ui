import { useState, useEffect } from 'react'
import { login } from 'api/auth'

export const useAuth = () => {
  const [fullName, setFullName] = useState<string>()
  const [requester, setRequester] = useState<{ name: string; email: string }>()
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    setLoadingAuth(true)
    if (!fullName || !requester) {
      login()
        .then(data => {
          if (data) {
            setFullName(data.name)
            setRequester({ name: data.name, email: data.email })
            setLoadingAuth(false)
          }
        })
        .catch(err => setError(err instanceof Error ? err.message : 'Unknown error'))
        .finally(() => setLoadingAuth(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (import.meta.env.VITE_HAS_MOCKS === 'true') {
    return {
      fullName: 'John Doe',
      requester: { name: 'John Doe', email: 'cK5mH@example.com', loadingAuth: false, error: undefined },
    }
  }

  return { fullName, requester, loadingAuth, error }
}
