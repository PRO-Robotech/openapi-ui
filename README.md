# openapi-ui

## React + TypeScript UI for Kubernetes

A React + TypeScript app that provides tables, forms and factories that renders UI and data directly from Kubernetes Custom Resources (CRDs).
Define interfaces in YAML; the app discovers CRDs, watches their objects, and builds a live UI.

## ⚙️ Configuration

This app can be configured through environment variables.

| Variable                                    | Type      | Required         | Description                                                                             |
| ------------------------------------------- | --------- | ---------------- | --------------------------------------------------------------------------------------- |
| `BASEPREFIX`                                | `string`  | No (better)      | Base URL for the app. `/openapi-ui`                                                     |
| `KUBE_API_URL`                              | `string`  | Yes              | URL for the Kubernetes API. `http://api.incloud-web.svc.default.in-cloud.internal:8081` |
| `BFF_URL`                                   | `string`  | Yes              | URL for the BFF.                                                                        |
| `TITLE_TEXT`                                | `string`  | Yes if no plugin | Page title.                                                                             |
| `LOGO_TEXT`                                 | `string`  | Yes if no plugin | Logo text near icon.                                                                    |
| `FOOTER_TEXT`                               | `string`  | Yes if no plugin | Footer text.                                                                            |
| `ICON_SVG`                                  | `string`  | Yes              | Favicon base64 encoded.                                                                 |
| `CUSTOM_LOGO_SVG`                           | `string`  | No               | Base64 encoded svg                                                                      |
| `CUSTOM_TENANT_TEXT`                        | `string`  | No               | Custom tenant text override                                                             |
| `LOGIN_URL`                                 | `string`  | Yes if no plugin | Login endpoint. `/oauth/token`                                                          |
| `LOGOUT_URL`                                | `string`  | Yes if no plugin | Logout endpoint. `/oauth/logout`                                                        |
| `LOGIN_USERNAME_FIELD`                      | `string`  | Yes if no plugin | Field from login endpoint response. `name`                                              |
| `CUSTOMIZATION_API_GROUP`                   | `string`  | Yes              | API group for customization resources. `front.in-cloud.io`                              |
| `CUSTOMIZATION_API_VERSION`                 | `string`  | Yes              | API version for customization resources. `v1alpha1`                                     |
| `CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL`  | `string`  | No               | Resource plural name for navigation settings. `navigations`                             |
| `CUSTOMIZATION_NAVIGATION_RESOURCE_NAME`    | `string`  | No               | Resource name for navigation settings. `navigation`                                     |
| `CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP`   | `string`  | No               | Custom namespace resource: api group.                                                   |
| `CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION` | `string`  | No               | Custom namespace resource: api version.                                                 |
| `CUSTOM_NAMESPACE_API_RESOURCE_PLURAL`      | `string`  | No               | Custom namespace resource: plural name.                                                 |
| `SELECTOR_WIDTH_CLUSTER`                    | `string`  | No               | Selector width for cluster: `200px`                                                     |
| `SELECTOR_WIDTH_NAMESPACE`                  | `string`  | No               | Selector width for namespace: `200px`                                                   |
| `SELECTOR_WIDTH_PROJECT`                    | `string`  | No               | Selector width for project: `200px`                                                     |
| `SELECTOR_WIDTH_INSTANCE`                   | `string`  | No               | Selector width for instance: `200px`                                                    |
| `CUSTOMIZATION_SIDEBAR_FALLBACK_ID`         | `string`  | Yes if no plugin | `spec.id` to find in `sidebars` to fallback. Use `-namespaced` for NS-pages             |
| `USE_NAMESPACE_NAV`                         | `boolean` | No               | Use namespaces instead of project/instances. `true`                                     |
| `HIDE_NAVIGATION`                           | `boolean` | No               | Hide navigation container (also navigation plugin).                                     |
| `HIDE_BREADCRUMBS`                          | `boolean` | No               | Hide breadcrumbs container.                                                             |
| `BREADCRUMBS_NO_MARGIN_TOP`                 | `boolean` | No               | Breadcrumbs with no margin-top.                                                         |
| `USE_NEW_NAVIGATION`                        | `boolean` | No               | Cluster selector in sidebar. NS selector where it needs to be.                          |
| `HIDE_INSIDE`                               | `boolean` | No               | Use namespaces instead of project/instances. `true`                                     |
| `HIDE_FOOTER`                               | `boolean` | No               | Hide footer container.                                                                  |
| `NAVIGATE_FROM_CLUSTERLIST`                 | `string`  | Yes              | Location to be navigated after selecting cluster. `/openapi-ui/clusters/~recordValue~`  |
| `PROJECTS_API_GROUP`                        | `string`  | No               | API group for projects resources. If not using namespace nav.                           |
| `PROJECTS_API_VERSION`                      | `string`  | No               | API version for projects resources. If not using namespace nav.                         |
| `PROJECTS_PLURAL`                           | `string`  | No               | Plural name for projects resources. If not using namespace nav.                         |
| `MARKETPLACE_PLURAL`                        | `string`  | No               | Plural name for marketplace resources for related factory component.                    |
| `MARKETPLACE_KIND`                          | `string`  | No               | Kind name for marketplace resources for related factory component.                      |
| `INSTANCES_API_GROUP`                       | `string`  | No               | API group for instances resources. If not using namespace nav.                          |
| `INSTANCES_API_VERSION`                     | `string`  | No               | API version for instances resources. If not using namespace nav.                        |
| `INSTANCES_PLURAL`                          | `string`  | No               | Plural name for instances resources. If not using namespace nav.                        |
| `NODE_TERMINAL_DEFAULT_PROFILE`             | `string`  | No               | Default profile for node terminal component. `baseline`. Deprecated.                    |
| `DOCS_URL`                                  | `string`  | Yes              | URL to navigate from question mark.                                                     |
| `SEARCH_TABLE_CUSTOMIZATION_PREFIX`         | `string`  | Yes              | Search tables Customization id prefix.                                                  |
| `REMOVE_BACKLINK`                           | `boolean` | No               | Remove backlink arrow from right-side navigation.                                       |
| `REMOVE_BACKLINK_TEXT`                      | `boolean` | No               | Remove backlink text from right-side navigation.                                        |
| `BASE_FACTORY_NAMESPACED_API_KEY`           | `string`  | Yes              | Base factory key for namespaced API resources.                                          |
| `BASE_FACTORY_CLUSTERSCOPED_API_KEY`        | `string`  | Yes              | Base factory key for clusterscoped API resources.                                       |
| `BASE_FACTORY_NAMESPACED_BUILTIN_KEY`       | `string`  | Yes              | Base factory key for namespaced builtin (v1) resources.                                 |
| `BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY`    | `string`  | Yes              | Base factory key for clusterscoped builtin (v1) resources.                              |
| `BASE_NAMESPACE_FACTORY_KEY`                | `string`  | Yes              | Base factory key for namespaces.                                                        |
| `MF_PLUGINS_NO_CLUSTER`                     | `string`  | No               | JSON for Plugins Manifest.                                                              |
| `THEME_TOKENS_COLORS_LIGHT`                 | `string`  | No               | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COLORS_DARK`                  | `string`  | No               | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_SIZES`                        | `string`  | No               | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COMPONENTS_LIGHT`             | `string`  | No               | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COMPONENTS_DARK`              | `string`  | No               | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_USE_MERGE_STRATEGY`           | `boolean` | No               | Use merge instead of replace for theme tokens. Doesn't work for components.             |

## 🤝 Contributing

[Check this out](./CONTRIBUTING.md)
