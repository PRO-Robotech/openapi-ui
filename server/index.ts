const path = require('path')
const fs = require('fs').promises
import express, { Express } from 'express'
import http from 'http'
const { createProxyMiddleware } = require('http-proxy-middleware')
import dotenv from 'dotenv'
import { getDynamicIndex } from './getDynamicIndex'

dotenv.config()

const basePrefix = process.env.BASEPREFIX

let options: dotenv.DotenvParseOutput | undefined
if (process.env.LOCAL === 'true') {
  const { parsed } = dotenv.config({ path: './.env.options' })
  options = parsed
}

const KUBE_API_URL = process.env.LOCAL === 'true' ? options?.KUBE_API_URL : process.env.KUBE_API_URL

const TITLE_TEXT = process.env.LOCAL === 'true' ? options?.TITLE_TEXT : process.env.TITLE_TEXT
const LOGO_TEXT = process.env.LOCAL === 'true' ? options?.LOGO_TEXT : process.env.LOGO_TEXT
const FOOTER_TEXT = process.env.LOCAL === 'true' ? options?.FOOTER_TEXT : process.env.FOOTER_TEXT
const CUSTOM_LOGO_SVG = process.env.LOCAL === 'true' ? options?.CUSTOM_LOGO_SVG : process.env.CUSTOM_LOGO_SVG
const CUSTOM_TENANT_TEXT = process.env.LOCAL === 'true' ? options?.CUSTOM_TENANT_TEXT : process.env.CUSTOM_TENANT_TEXT

const CUSTOMIZATION_API_GROUP =
  process.env.LOCAL === 'true' ? options?.CUSTOMIZATION_API_GROUP : process.env.CUSTOMIZATION_API_GROUP
const CUSTOMIZATION_API_VERSION =
  process.env.LOCAL === 'true' ? options?.CUSTOMIZATION_API_VERSION : process.env.CUSTOMIZATION_API_VERSION

const CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL =
  process.env.LOCAL === 'true'
    ? options?.CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL
    : process.env.CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL
const CUSTOMIZATION_NAVIGATION_RESOURCE_NAME =
  process.env.LOCAL === 'true'
    ? options?.CUSTOMIZATION_NAVIGATION_RESOURCE_NAME
    : process.env.CUSTOMIZATION_NAVIGATION_RESOURCE_NAME

const CUSTOMIZATION_SIDEBAR_FALLBACK_ID =
  process.env.LOCAL === 'true'
    ? options?.CUSTOMIZATION_SIDEBAR_FALLBACK_ID
    : process.env.CUSTOMIZATION_SIDEBAR_FALLBACK_ID

const USE_NAMESPACE_NAV = process.env.LOCAL === 'true' ? options?.USE_NAMESPACE_NAV : process.env.USE_NAMESPACE_NAV
const HIDE_INSIDE = process.env.LOCAL === 'true' ? options?.HIDE_INSIDE : process.env.HIDE_INSIDE

const NAVIGATE_FROM_CLUSTERLIST =
  process.env.LOCAL === 'true' ? options?.NAVIGATE_FROM_CLUSTERLIST : process.env.NAVIGATE_FROM_CLUSTERLIST

const PROJECTS_API_GROUP = process.env.LOCAL === 'true' ? options?.PROJECTS_API_GROUP : process.env.PROJECTS_API_GROUP
const PROJECTS_API_VERSION =
  process.env.LOCAL === 'true' ? options?.PROJECTS_API_VERSION : process.env.PROJECTS_API_VERSION
const PROJECTS_PLURAL = process.env.LOCAL === 'true' ? options?.PROJECTS_PLURAL : process.env.PROJECTS_PLURAL

const MARKETPLACE_PLURAL = process.env.LOCAL === 'true' ? options?.MARKETPLACE_PLURAL : process.env.MARKETPLACE_PLURAL
const MARKETPLACE_KIND = process.env.LOCAL === 'true' ? options?.MARKETPLACE_KIND : process.env.MARKETPLACE_KIND

const INSTANCES_API_GROUP =
  process.env.LOCAL === 'true' ? options?.INSTANCES_API_GROUP : process.env.INSTANCES_API_GROUP
const INSTANCES_API_VERSION =
  process.env.LOCAL === 'true' ? options?.INSTANCES_API_VERSION : process.env.INSTANCES_API_VERSION
const INSTANCES_PLURAL = process.env.LOCAL === 'true' ? options?.INSTANCES_PLURAL : process.env.INSTANCES_PLURAL

const BFF_URL = process.env.LOCAL === 'true' ? options?.BFF_URL : process.env.BFF_URL

const NODE_TERMINAL_DEFAULT_PROFILE =
  process.env.LOCAL === 'true' ? options?.NODE_TERMINAL_DEFAULT_PROFILE : process.env.NODE_TERMINAL_DEFAULT_PROFILE

const LOGIN_URL = process.env.LOCAL === 'true' ? options?.LOGIN_URL : process.env.LOGIN_URL
const LOGOUT_URL = process.env.LOCAL === 'true' ? options?.LOGOUT_URL : process.env.LOGOUT_URL
const LOGIN_USERNAME_FIELD =
  process.env.LOCAL === 'true' ? options?.LOGIN_USERNAME_FIELD : process.env.LOGIN_USERNAME_FIELD

const REMOVE_BACKLINK = process.env.LOCAL === 'true' ? options?.REMOVE_BACKLINK : process.env.REMOVE_BACKLINK
const REMOVE_BACKLINK_TEXT =
  process.env.LOCAL === 'true' ? options?.REMOVE_BACKLINK_TEXT : process.env.REMOVE_BACKLINK_TEXT

const DOCS_URL = process.env.LOCAL === 'true' ? options?.DOCS_URL : process.env.DOCS_URL

const SEARCH_TABLE_CUSTOMIZATION_PREFIX =
  process.env.LOCAL === 'true'
    ? options?.SEARCH_TABLE_CUSTOMIZATION_PREFIX
    : process.env.SEARCH_TABLE_CUSTOMIZATION_PREFIX

const BASE_FACTORY_NAMESPACED_API_KEY =
  process.env.LOCAL === 'true' ? options?.BASE_FACTORY_NAMESPACED_API_KEY : process.env.BASE_FACTORY_NAMESPACED_API_KEY
const BASE_FACTORY_CLUSTERSCOPED_API_KEY =
  process.env.LOCAL === 'true'
    ? options?.BASE_FACTORY_CLUSTERSCOPED_API_KEY
    : process.env.BASE_FACTORY_CLUSTERSCOPED_API_KEY
const BASE_FACTORY_NAMESPACED_BUILTIN_KEY =
  process.env.LOCAL === 'true'
    ? options?.BASE_FACTORY_NAMESPACED_BUILTIN_KEY
    : process.env.BASE_FACTORY_NAMESPACED_BUILTIN_KEY
const BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY =
  process.env.LOCAL === 'true'
    ? options?.BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY
    : process.env.BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY
const BASE_NAMESPACE_FACTORY_KEY =
  process.env.LOCAL === 'true' ? options?.BASE_NAMESPACE_FACTORY_KEY : process.env.BASE_NAMESPACE_FACTORY_KEY

const CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP =
  process.env.LOCAL === 'true'
    ? options?.CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP
    : process.env.CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP
const CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION =
  process.env.LOCAL === 'true'
    ? options?.CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION
    : process.env.CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION
const CUSTOM_NAMESPACE_API_RESOURCE_PLURAL =
  process.env.LOCAL === 'true'
    ? options?.CUSTOM_NAMESPACE_API_RESOURCE_PLURAL
    : process.env.CUSTOM_NAMESPACE_API_RESOURCE_PLURAL

const SELECTOR_WIDTH_CLUSTER =
  process.env.LOCAL === 'true' ? options?.SELECTOR_WIDTH_CLUSTER : process.env.SELECTOR_WIDTH_CLUSTER
const SELECTOR_WIDTH_NAMESPACE =
  process.env.LOCAL === 'true' ? options?.SELECTOR_WIDTH_NAMESPACE : process.env.SELECTOR_WIDTH_NAMESPACE
const SELECTOR_WIDTH_PROJECT =
  process.env.LOCAL === 'true' ? options?.SELECTOR_WIDTH_PROJECT : process.env.SELECTOR_WIDTH_PROJECT
const SELECTOR_WIDTH_INSTANCE =
  process.env.LOCAL === 'true' ? options?.SELECTOR_WIDTH_INSTANCE : process.env.SELECTOR_WIDTH_INSTANCE

const MF_PLUGINS_NO_CLUSTER =
  process.env.LOCAL === 'true' ? options?.MF_PLUGINS_NO_CLUSTER : process.env.MF_PLUGINS_NO_CLUSTER

type TPluginConfig = {
  name: string
  entry: string
  exposedModule: string
}

type TPluginMap = Record<string, TPluginConfig>

const isPluginConfig = (x: unknown): x is TPluginConfig => {
  if (!x || typeof x !== 'object') return false
  const o = x as Record<string, unknown>
  return typeof o.name === 'string' && typeof o.entry === 'string' && typeof o.exposedModule === 'string'
}

const PARSED_MF_PLUGINS_NO_CLUSTER = (() => {
  if (!MF_PLUGINS_NO_CLUSTER) return {}

  let parsed: unknown
  try {
    parsed = JSON.parse(MF_PLUGINS_NO_CLUSTER)
  } catch {
    return {}
  }

  if (!parsed || typeof parsed !== 'object') return {}

  const out: TPluginMap = {}
  for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
    if (!isPluginConfig(value)) continue
    out[key] = value
  }

  return out
})()

const healthcheck = require('express-healthcheck')
const promBundle = require('express-prom-bundle')

const metricsMiddleware = promBundle({ includeMethod: true, metricsPath: `${basePrefix ? basePrefix : ''}/metrics` })
const winston = require('winston')
const expressWinston = require('express-winston')

const app: Express = express()
const port = process.env.PORT || 8080

app.use(`${basePrefix ? basePrefix : ''}/healthcheck`, healthcheck())
app.use(metricsMiddleware)

if (process.env.LOGGER === 'true') {
  app.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      timeStamp: true,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.json(),
      ),
      expressFormat: true,
      colorize: false,
      requestWhitelist: ['body'],
      responseWhitelist: ['body'],
    }),
  )
}

const bffFormProxy =
  process.env.LOCAL === 'true'
    ? createProxyMiddleware({
        target: BFF_URL,
        changeOrigin: true,
        secure: false,
        ws: false,
      })
    : undefined

// Only add proxies if LOCAL=true
if (process.env.LOCAL === 'true') {
  console.log('✅ Proxies are enabled.')
  // Proxy: /api/clusters/.*/k8s/
  app.use(
    '/api/clusters/:clusterId/k8s',
    createProxyMiddleware({
      target: `${KUBE_API_URL}/api/clusters`,
      changeOrigin: true,
      secure: false,
      ws: true,
      pathRewrite: (path, req) => path.replace(/^\/api\/clusters\//, '/'),
      // logLevel: 'debug',
      // onProxyReq: (proxyReq, req, res) => {
      //   console.debug(`[PROXY] ${req.method} ${req.originalUrl} -> ${proxyReq.getHeader('host')}${proxyReq.path}`)
      // },
    }),
  )

  // Proxy: /clusterlist
  app.use(
    '/clusterlist',
    createProxyMiddleware({
      target: `${KUBE_API_URL}/clusterlist`,
      changeOrigin: true,
      secure: false,
      pathRewrite: (path, req) => path.replace(/^\/clusterlist/, ''),
      // logLevel: 'debug',
      // onProxyReq: (proxyReq, req, res) => {
      //   console.debug(`[PROXY] ${req.method} ${req.originalUrl} -> ${proxyReq.getHeader('host')}${proxyReq.path}`)
      // },
    }),
  )

  // Proxy: /openapi-bff
  app.use(
    '/openapi-bff',
    createProxyMiddleware({
      target: BFF_URL,
      changeOrigin: true,
      secure: false,
      // pathRewrite: (path, req) => path.replace(/^\/bff/, ''),
      // logLevel: 'debug',
      // onProxyReq: (proxyReq, req, res) => {
      //   console.debug(`[PROXY] ${req.method} ${req.originalUrl} -> ${proxyReq.getHeader('host')}${proxyReq.path}`)
      // },
    }),
  )

  // Proxy: bffFormProxy
  app.use('/openapi-bff-ws/forms', bffFormProxy)
} else {
  console.log('🚫 Proxies are disabled.')
}

app.get(`${basePrefix ? basePrefix : ''}/env.js`, (_, res) => {
  res.set('Content-Type', 'text/javascript')
  res.send(
    `
    window._env_ = {
    ${basePrefix ? `  BASEPREFIX: "${basePrefix}",` : ''}
      TITLE_TEXT: ${JSON.stringify(TITLE_TEXT) || '"check envs"'},
      LOGO_TEXT: ${LOGO_TEXT !== undefined ? JSON.stringify(LOGO_TEXT) : '"check envs"'},
      FOOTER_TEXT: ${JSON.stringify(FOOTER_TEXT) || '"check envs"'},
      ${CUSTOM_LOGO_SVG ? `  CUSTOM_LOGO_SVG: "${CUSTOM_LOGO_SVG}",` : ''}
      ${CUSTOM_TENANT_TEXT ? `  CUSTOM_TENANT_TEXT: "${CUSTOM_TENANT_TEXT}",` : ''}
      CUSTOMIZATION_API_GROUP: ${JSON.stringify(CUSTOMIZATION_API_GROUP) || '"check envs"'},
      CUSTOMIZATION_API_VERSION: ${JSON.stringify(CUSTOMIZATION_API_VERSION) || '"check envs"'},
      CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL: ${
        JSON.stringify(CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL) || '"check envs"'
      },
      CUSTOMIZATION_NAVIGATION_RESOURCE_NAME: ${
        JSON.stringify(CUSTOMIZATION_NAVIGATION_RESOURCE_NAME) || '"check envs"'
      },
      ${
        CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP
          ? `  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP: "${CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP}",`
          : ''
      }
      ${
        CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION
          ? `  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION: "${CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION}",`
          : ''
      }
      ${
        CUSTOM_NAMESPACE_API_RESOURCE_PLURAL
          ? `  CUSTOM_NAMESPACE_API_RESOURCE_PLURAL: "${CUSTOM_NAMESPACE_API_RESOURCE_PLURAL}",`
          : ''
      }
      ${SELECTOR_WIDTH_CLUSTER ? `  SELECTOR_WIDTH_CLUSTER: "${SELECTOR_WIDTH_CLUSTER}",` : ''}
      ${SELECTOR_WIDTH_NAMESPACE ? `  SELECTOR_WIDTH_NAMESPACE: "${SELECTOR_WIDTH_NAMESPACE}",` : ''}
      ${SELECTOR_WIDTH_PROJECT ? `  SELECTOR_WIDTH_PROJECT: "${SELECTOR_WIDTH_PROJECT}",` : ''}
      ${SELECTOR_WIDTH_INSTANCE ? `  SELECTOR_WIDTH_INSTANCE: "${SELECTOR_WIDTH_INSTANCE}",` : ''}
      CUSTOMIZATION_SIDEBAR_FALLBACK_ID: ${JSON.stringify(CUSTOMIZATION_SIDEBAR_FALLBACK_ID) || '"check envs"'},
      USE_NAMESPACE_NAV: ${USE_NAMESPACE_NAV ? JSON.stringify(USE_NAMESPACE_NAV).toLowerCase() : '"false"'},
      HIDE_INSIDE: ${HIDE_INSIDE ? JSON.stringify(HIDE_INSIDE).toLowerCase() : '"false"'},
      NAVIGATE_FROM_CLUSTERLIST: ${JSON.stringify(NAVIGATE_FROM_CLUSTERLIST) || '"check envs"'},
      PROJECTS_API_GROUP: ${JSON.stringify(PROJECTS_API_GROUP) || '"check envs"'},
      PROJECTS_API_VERSION: ${JSON.stringify(PROJECTS_API_VERSION) || '"check envs"'},
      PROJECTS_PLURAL: ${JSON.stringify(PROJECTS_PLURAL) || '"check envs"'},
      MARKETPLACE_PLURAL: ${JSON.stringify(MARKETPLACE_PLURAL) || '"check envs"'},
      MARKETPLACE_KIND: ${JSON.stringify(MARKETPLACE_KIND) || '"check envs"'},
      INSTANCES_API_GROUP: ${JSON.stringify(INSTANCES_API_GROUP) || '"check envs"'},
      INSTANCES_API_VERSION: ${JSON.stringify(INSTANCES_API_VERSION) || '"check envs"'},
      INSTANCES_PLURAL: ${JSON.stringify(INSTANCES_PLURAL) || '"check envs"'},
      NODE_TERMINAL_DEFAULT_PROFILE: ${JSON.stringify(NODE_TERMINAL_DEFAULT_PROFILE) || '"general"'},
      LOGIN_URL: ${JSON.stringify(LOGIN_URL) || '"check envs"'},
      LOGOUT_URL: ${JSON.stringify(LOGOUT_URL) || '"check envs"'},
      LOGIN_USERNAME_FIELD: ${JSON.stringify(LOGIN_USERNAME_FIELD) || '"check envs"'},
      DOCS_URL: ${JSON.stringify(DOCS_URL) || '"/docs"'},
      SEARCH_TABLE_CUSTOMIZATION_PREFIX: ${JSON.stringify(SEARCH_TABLE_CUSTOMIZATION_PREFIX) || '"search-"'},
      REMOVE_BACKLINK: ${!!REMOVE_BACKLINK ? JSON.stringify(REMOVE_BACKLINK).toLowerCase() : '"false"'},
      REMOVE_BACKLINK_TEXT: ${!!REMOVE_BACKLINK_TEXT ? JSON.stringify(REMOVE_BACKLINK_TEXT).toLowerCase() : '"false"'},
      BASE_FACTORY_NAMESPACED_API_KEY: ${JSON.stringify(BASE_FACTORY_NAMESPACED_API_KEY) || '"check envs"'},
      BASE_FACTORY_CLUSTERSCOPED_API_KEY: ${JSON.stringify(BASE_FACTORY_CLUSTERSCOPED_API_KEY) || '"check envs"'},
      BASE_FACTORY_NAMESPACED_BUILTIN_KEY: ${JSON.stringify(BASE_FACTORY_NAMESPACED_BUILTIN_KEY) || '"check envs"'},
      BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY: ${
        JSON.stringify(BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY) || '"check envs"'
      },
      BASE_NAMESPACE_FACTORY_KEY: ${JSON.stringify(BASE_NAMESPACE_FACTORY_KEY) || '"check envs"'},
      MF_PLUGINS_NO_CLUSTER: ${JSON.stringify(PARSED_MF_PLUGINS_NO_CLUSTER) || '"check envs"'}
    }
    `,
  )
})

app.get(`${basePrefix ? basePrefix : ''}/docs`, (_, res) => {
  res.redirect(process.env.DOCUMENTATION_URI || '/')
})

const tryFiles = async (req, res, next) => {
  try {
    const unsafeReqPath = basePrefix ? req.path.replace(basePrefix, '') : req.path
    const safeReqPath = path.normalize(unsafeReqPath).replace(/^(\.\.(\/|\\|$))+/, '')
    const filePath = path.join(__dirname, safeReqPath.replace(/^\//, ''))
    await fs.access(filePath)
    return res.sendFile(filePath)
  } catch (error: any) {
    if (basePrefix) {
      const indexText = getDynamicIndex(basePrefix)
      res.set('Content-Type', 'text/html')
      return res.send(indexText)
    }
    return res.sendFile('/index.html', {
      root: path.join(__dirname),
    })
  }
}

app.get(`${basePrefix ? basePrefix : ''}/`, (_, res) => {
  if (basePrefix) {
    const indexText = getDynamicIndex(basePrefix)
    res.set('Content-Type', 'text/html')
    return res.send(indexText)
  }
  res.sendFile('/index.html', {
    root: path.join(__dirname),
  })
})

app.get('*', (req, res, next) => {
  tryFiles(req, res, next)
})

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`)
// })
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`[server]: Server is running at port: ${port}`)
})

server.on('upgrade', (req, socket, head) => {
  if (process.env.LOCAL === 'true' && req.url?.indexOf('/openapi-bff-ws/forms') === 0) {
    bffFormProxy.upgrade(req, socket, head)
  }
})
