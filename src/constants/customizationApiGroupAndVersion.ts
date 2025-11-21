/* eslint-disable no-underscore-dangle */

export const TITLE_TEXT = import.meta.env.DEV
  ? window._env_.TITLE_TEXT || import.meta.env.VITE_TITLE_TEXT
  : window._env_.TITLE_TEXT

export const LOGO_TEXT = import.meta.env.DEV
  ? window._env_.LOGO_TEXT || import.meta.env.VITE_LOGO_TEXT
  : window._env_.LOGO_TEXT

export const FOOTER_TEXT = import.meta.env.DEV
  ? window._env_.FOOTER_TEXT || import.meta.env.VITE_FOOTER_TEXT
  : window._env_.FOOTER_TEXT

export const CUSTOM_LOGO_SVG = import.meta.env.DEV
  ? window._env_.CUSTOM_LOGO_SVG || import.meta.env.VITE_CUSTOM_LOGO_SVG
  : window._env_.CUSTOM_LOGO_SVG

export const CUSTOM_TENANT_TEXT = import.meta.env.DEV
  ? window._env_.CUSTOM_TENANT_TEXT || import.meta.env.VITE_CUSTOM_TENANT_TEXT
  : window._env_.CUSTOM_TENANT_TEXT

export const BASE_API_GROUP = import.meta.env.DEV
  ? window._env_.CUSTOMIZATION_API_GROUP || import.meta.env.VITE_CUSTOMIZATION_API_GROUP
  : window._env_.CUSTOMIZATION_API_GROUP
export const BASE_API_VERSION = import.meta.env.DEV
  ? window._env_.CUSTOMIZATION_API_VERSION || import.meta.env.VITE_CUSTOMIZATION_API_VERSION
  : window._env_.CUSTOMIZATION_API_VERSION

export const BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL = import.meta.env.DEV
  ? window._env_.CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL ||
    import.meta.env.VITE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL
  : window._env_.CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL
export const BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME = import.meta.env.DEV
  ? window._env_.CUSTOMIZATION_NAVIGATION_RESOURCE_NAME || import.meta.env.VITE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME
  : window._env_.CUSTOMIZATION_NAVIGATION_RESOURCE_NAME

export const CUSTOMIZATION_SIDEBAR_FALLBACK_ID = import.meta.env.DEV
  ? window._env_.CUSTOMIZATION_SIDEBAR_FALLBACK_ID || import.meta.env.VITE_CUSTOMIZATION_SIDEBAR_FALLBACK_ID
  : window._env_.CUSTOMIZATION_SIDEBAR_FALLBACK_ID

export const BASE_USE_NAMESPACE_NAV = import.meta.env.DEV
  ? window._env_.USE_NAMESPACE_NAV || import.meta.env.VITE_USE_NAMESPACE_NAV
  : window._env_.USE_NAMESPACE_NAV

export const BASE_HIDE_INSIDE = import.meta.env.DEV
  ? window._env_.HIDE_INSIDE || import.meta.env.VITE_HIDE_INSIDE
  : window._env_.HIDE_INSIDE

export const BASE_NAVIGATE_FROM_CLUSTERLIST = import.meta.env.DEV
  ? window._env_.NAVIGATE_FROM_CLUSTERLIST || import.meta.env.VITE_NAVIGATE_FROM_CLUSTERLIST
  : window._env_.NAVIGATE_FROM_CLUSTERLIST

export const BASE_PROJECTS_API_GROUP = import.meta.env.DEV
  ? window._env_.PROJECTS_API_GROUP || import.meta.env.VITE_PROJECTS_API_GROUP
  : window._env_.PROJECTS_API_GROUP
export const BASE_PROJECTS_API_VERSION = import.meta.env.DEV
  ? window._env_.PROJECTS_API_VERSION || import.meta.env.VITE_PROJECTS_API_VERSION
  : window._env_.PROJECTS_API_VERSION
export const BASE_PROJECTS_PLURAL = import.meta.env.DEV
  ? window._env_.PROJECTS_PLURAL || import.meta.env.VITE_PROJECTS_PLURAL
  : window._env_.PROJECTS_PLURAL

export const BASE_MARKETPLACE_PLURAL = import.meta.env.DEV
  ? window._env_.MARKETPLACE_PLURAL || import.meta.env.VITE_MARKETPLACE_PLURAL
  : window._env_.MARKETPLACE_PLURAL
export const BASE_MARKETPLACE_KIND = import.meta.env.DEV
  ? import.meta.env.VITE_MARKETPLACE_KIND
  : window._env_.MARKETPLACE_KIND

export const BASE_INSTANCES_API_GROUP: string | undefined = import.meta.env.DEV
  ? window._env_.INSTANCES_API_GROUP || import.meta.env.VITE_INSTANCES_API_GROUP
  : window._env_.INSTANCES_API_GROUP
export const BASE_INSTANCES_API_VERSION = import.meta.env.DEV
  ? window._env_.INSTANCES_API_VERSION || import.meta.env.VITE_INSTANCES_API_VERSION
  : window._env_.INSTANCES_API_VERSION
export const BASE_INSTANCES_PLURAL = import.meta.env.DEV
  ? window._env_.INSTANCES_PLURAL || import.meta.env.VITE_INSTANCES_PLURAL
  : window._env_.INSTANCES_PLURAL

export const NODE_TERMINAL_DEFAULT_PROFILE = import.meta.env.DEV
  ? window._env_.NODE_TERMINAL_DEFAULT_PROFILE || import.meta.env.VITE_NODE_TERMINAL_DEFAULT_PROFILE
  : window._env_.NODE_TERMINAL_DEFAULT_PROFILE

export const LOGIN_URL = import.meta.env.DEV
  ? window._env_.LOGIN_URL || import.meta.env.VITE_LOGIN_URL
  : window._env_.LOGIN_URL
export const LOGOUT_URL = import.meta.env.DEV
  ? window._env_.LOGOUT_URL || import.meta.env.VITE_LOGOUT_URL
  : window._env_.LOGOUT_URL
export const LOGIN_USERNAME_FIELD = import.meta.env.DEV
  ? window._env_.LOGIN_USERNAME_FIELD || import.meta.env.VITE_LOGIN_USERNAME_FIELD
  : window._env_.LOGIN_USERNAME_FIELD

export const DOCS_URL = import.meta.env.DEV
  ? window._env_.DOCS_URL || import.meta.env.VITE_DOCS_URL
  : window._env_.DOCS_URL

export const SEARCH_TABLE_CUSTOMIZATION_PREFIX = import.meta.env.DEV
  ? window._env_.SEARCH_TABLE_CUSTOMIZATION_PREFIX || import.meta.env.VITE_SEARCH_TABLE_CUSTOMIZATION_PREFIX
  : window._env_.SEARCH_TABLE_CUSTOMIZATION_PREFIX

export const BASE_REMOVE_BACKLINK = import.meta.env.DEV
  ? window._env_.REMOVE_BACKLINK === 'true' || import.meta.env.VITE_REMOVE_BACKLINK?.toString().toLowerCase() === 'true'
  : window._env_.REMOVE_BACKLINK === 'true'
export const BASE_REMOVE_BACKLINK_TEXT = import.meta.env.DEV
  ? window._env_.REMOVE_BACKLINK_TEXT === 'true' ||
    import.meta.env.VITE_REMOVE_BACKLINK_TEXT?.toString().toLowerCase() === 'true'
  : window._env_.REMOVE_BACKLINK_TEXT === 'true'

export const BASE_FACTORY_NAMESPACED_API_KEY = import.meta.env.DEV
  ? window._env_.BASE_FACTORY_NAMESPACED_API_KEY || import.meta.env.VITE_BASE_FACTORY_NAMESPACED_API_KEY
  : window._env_.BASE_FACTORY_NAMESPACED_API_KEY
export const BASE_FACTORY_CLUSTERSCOPED_API_KEY = import.meta.env.DEV
  ? window._env_.BASE_FACTORY_CLUSTERSCOPED_API_KEY || import.meta.env.VITE_BASE_FACTORY_CLUSTERSCOPED_API_KEY
  : window._env_.BASE_FACTORY_CLUSTERSCOPED_API_KEY
export const BASE_FACTORY_NAMESPACED_BUILTIN_KEY = import.meta.env.DEV
  ? window._env_.BASE_FACTORY_NAMESPACED_BUILTIN_KEY || import.meta.env.VITE_BASE_FACTORY_NAMESPACED_BUILTIN_KEY
  : window._env_.BASE_FACTORY_NAMESPACED_BUILTIN_KEY
export const BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY = import.meta.env.DEV
  ? window._env_.BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY || import.meta.env.VITE_BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY
  : window._env_.BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY
export const BASE_NAMESPACE_FACTORY_KEY = import.meta.env.DEV
  ? window._env_.BASE_NAMESPACE_FACTORY_KEY || import.meta.env.VITE_BASE_NAMESPACE_FACTORY_KEY
  : window._env_.BASE_NAMESPACE_FACTORY_KEY

export const CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP: string | undefined = import.meta.env.DEV
  ? window._env_.CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP || import.meta.env.VITE_CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP
  : window._env_.CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP
export const CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION = import.meta.env.DEV
  ? window._env_.CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION ||
    import.meta.env.VITE_CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION
  : window._env_.CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION
export const CUSTOM_NAMESPACE_API_RESOURCE_PLURAL = import.meta.env.DEV
  ? window._env_.CUSTOM_NAMESPACE_API_RESOURCE_PLURAL || import.meta.env.VITE_CUSTOM_NAMESPACE_API_RESOURCE_PLURAL
  : window._env_.CUSTOM_NAMESPACE_API_RESOURCE_PLURAL
