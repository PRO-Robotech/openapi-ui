import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PluginLoadingState {
  loadingPlugins: string[]
}

const initialState: PluginLoadingState = {
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
      state.loadingPlugins = state.loadingPlugins.filter((id) => id !== action.payload)
    },
  },
})

export const { addLoadingPlugin, removeLoadingPlugin } = pluginLoadingSlice.actions
