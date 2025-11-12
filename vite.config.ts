import path from 'path'
import dotenv from 'dotenv'
import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// Plugin to handle dynamic imports of @novnc/novnc from toolkit
// This ensures that when toolkit's dynamic import is encountered,
// Vite resolves it to the actual module and bundles it properly
const handleNovncDynamicImports: Plugin = {
  name: 'handle-novnc-dynamic-imports',
  resolveId(id, importer) {
    // If importing @novnc/novnc (especially from toolkit bundle), resolve it to node_modules
    // This allows Vite to bundle it properly instead of leaving it as external
    if (id.includes('@novnc/novnc') || id.includes('/novnc/')) {
      // Resolve to actual module path so Vite can bundle it
      return path.resolve(__dirname, './node_modules/@novnc/novnc/lib/rfb.js')
    }
    return null
  },
  renderDynamicImport({ moduleId }) {
    // Transform dynamic imports of @novnc/novnc to ensure they're bundled
    if (moduleId && (moduleId.includes('@novnc/novnc') || moduleId.includes('/novnc/'))) {
      // Return null to let Vite handle it normally - it will bundle it
      return null
    }
    return null
  },
}

// const { VITE_BASEPREFIX } = process.env
const { parsed: options } = dotenv.config({ path: './.env.options' })

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  // base: VITE_BASEPREFIX || '/openapi-ui',
  build: {
    outDir: 'build',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      // Don't externalize @novnc/novnc - let Vite handle it properly
      // Dynamic imports will create separate chunks, avoiding top-level await issues
      // The module will be bundled and available at runtime
      output: {
        entryFileNames: `[name]-react.js`,
        chunkFileNames: `[name]-react.js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  publicDir: 'public',
  plugins: [
    react(),
    federation({
      name: 'openapi-ui',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/federation.tsx',
      },
      shared: ['react', 'react-dom', 'react-redux', 'react-router-dom', 'antd', '@tanstack/react-query'],
    }),
    nodePolyfills({
      include: ['buffer', 'process', 'path'],
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
    }),
    handleNovncDynamicImports,
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      localTypes: path.resolve(__dirname, './src/localTypes'),
      mocks: path.resolve(__dirname, './src/mocks'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      templates: path.resolve(__dirname, './src/templates'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
      // Alias for @novnc/novnc to ensure it resolves correctly during dev and build
      '@novnc/novnc/lib/rfb.js': path.resolve(__dirname, './node_modules/@novnc/novnc/lib/rfb.js'),
    },
  },
  optimizeDeps: {
    include: ['@novnc/novnc'],
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: '/openapi-ui',
    proxy: {
      '^/api/clusters/.*/k8s/': {
        // '/api': {
        target: `${options?.KUBE_API_URL}/api/clusters`,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/api\/clusters\//, '/'),
        // bypass: function (req, res, proxyOptions) {
        //   const url = req.url || ''
        //   if (/^\/api\/clusters\/[^/]+\/k8s\//.test(url)) {
        //     req.url = url.replace(/^\/api\/clusters\//, '/')
        //     proxyOptions.target = `${options?.KUBE_API_URL}/api/clusters`
        //   } else if (/^\/api\/clusters\/[^/]+\/openapi-bff/.test(url)) {
        //     console.log(req.url)
        //     proxyOptions.target = options?.BFF_URL
        //   }

        //   return null // continue proxy
        // },
        // configure: (proxy, _options) => {
        //   proxy.on('error', (err, _req, _res) => {
        //     console.log('proxy error', err)
        //   })
        //   proxy.on('proxyReq', (proxyReq, req, _res) => {
        //     console.log(
        //       'Sending Request:',
        //       req.method,
        //       req.url,
        //       ' => TO THE TARGET =>  ',
        //       proxyReq.method,
        //       proxyReq.protocol,
        //       proxyReq.host,
        //       proxyReq.path,
        //       JSON.stringify(proxyReq.getHeaders()),
        //     )
        //   })
        //   proxy.on('proxyRes', (proxyRes, req, _res) => {
        //     console.log(
        //       'Received Response from the Target:',
        //       proxyRes.statusCode,
        //       req.url,
        //       JSON.stringify(proxyRes.headers),
        //     )
        //   })
        // },
      },
      '/clusterlist': {
        target: `${options?.KUBE_API_URL}/clusterlist`,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/clusterlist/, ''),
      },
      '^/api/clusters/.*/openapi-bff': {
        target: options?.BFF_URL,
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/bff/, ''),
        // configure: (proxy, _options) => {
        //   proxy.on('error', (err, _req, _res) => {
        //     console.log('proxy error', err)
        //   })
        //   proxy.on('proxyReq', (proxyReq, req, _res) => {
        //     console.log(
        //       'Sending Request:',
        //       req.method,
        //       req.url,
        //       ' => TO THE TARGET =>  ',
        //       proxyReq.method,
        //       proxyReq.protocol,
        //       proxyReq.host,
        //       proxyReq.path,
        //       JSON.stringify(proxyReq.getHeaders()),
        //     )
        //   })
        //   proxy.on('proxyRes', (proxyRes, req, _res) => {
        //     console.log(
        //       'Received Response from the Target:',
        //       proxyRes.statusCode,
        //       req.url,
        //       JSON.stringify(proxyRes.headers),
        //     )
        //   })
        // },
      },
      '^/api/clusters/.*/openapi-bff-ws': {
        target: options?.BFF_URL,
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
