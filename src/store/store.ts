import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './theme/theme/theme'
import { federationSlice } from './federation/federation/federation'
import { baseprefixSlice } from './federation/federation/baseprefix'
import { clusterListSlice } from './clusterList/clusterList/clusterList'
import { clusterSlice } from './cluster/cluster/cluster'
import { pluginLoadingSlice } from './pluginLoading/pluginLoading/pluginLoading'

export const store = configureStore({
  reducer: {
    openapiTheme: themeSlice.reducer,
    federation: federationSlice.reducer,
    baseprefix: baseprefixSlice.reducer,
    clusterList: clusterListSlice.reducer,
    cluster: clusterSlice.reducer,
    pluginLoading: pluginLoadingSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
