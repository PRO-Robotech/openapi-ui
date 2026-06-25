declare global {
  interface Window {
    _env_: Record<string, string | undefined>
  }
}
export {}
