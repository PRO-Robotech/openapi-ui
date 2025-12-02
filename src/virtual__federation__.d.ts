// src/types/virtual__federation__.d.ts
declare module 'virtual:__federation__' {
  export interface IRemoteConfig {
    url: (() => Promise<string>) | string
    format: 'esm' | 'systemjs' | 'var'
    from: 'vite' | 'webpack'
  }

  export function __federation_method_setRemote(name: string, config: IRemoteConfig): void

  export function __federation_method_getRemote(name: string, exposedPath: string): Promise<unknown>

  export function __federation_method_unwrapDefault(unwrappedModule: unknown): unknown

  export function __federation_method_ensure(remoteName: string): Promise<unknown>

  export function __federation_method_wrapDefault(module: unknown, need: boolean): Promise<unknown>
}
