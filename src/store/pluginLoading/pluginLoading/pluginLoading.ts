/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TState = {
  loadingPlugins: string[]
}

const initialState: TState = {
  loadingPlugins: [],
}

export const pluginLoadingSlice = createSlice({
  name: 'pluginLoading',
  initialState,
  reducers: {
    addLoadingPlugin: (state, action: PayloadAction<string>) => {
      if (!state.loadingPlugins.includes(action.payload)) {
        state.loadingPlugins.push(action.payload)
      }
    },
    removeLoadingPlugin: (state, action: PayloadAction<string>) => {
      state.loadingPlugins = state.loadingPlugins.filter(name => name !== action.payload)
    },
  },
})

export const { addLoadingPlugin, removeLoadingPlugin } = pluginLoadingSlice.actions
