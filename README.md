# openapi-ui

## React + TypeScript UI for Kubernetes

A React + TypeScript app that provides tables, forms and factories that renders UI and data directly from Kubernetes Custom Resources (CRDs).
Define interfaces in YAML; the app discovers CRDs, watches their objects, and builds a live UI.

## ⚙️ Configuration

This app can be configured through environment variables.

| Variable                                    | Type      | Description                                                                             |
| ------------------------------------------- | --------- | --------------------------------------------------------------------------------------- |
| `BASEPREFIX`                                | `string`  | Base URL for the app. `/openapi-ui`                                                     |
| `KUBE_API_URL`                              | `string`  | URL for the Kubernetes API. `http://api.incloud-web.svc.default.in-cloud.internal:8081` |
| `BFF_URL`                                   | `string`  | URL for the BFF                                                                         |
| `TITLE_TEXT`                                | `string`  | Page title                                                                              |
| `LOGO_TEXT`                                 | `string`  | Logo text near icon                                                                     |
| `ICON_SVG`                                  | `string`  | Favicon base64 encoded                                                                  |
| `FOOTER_TEXT`                               | `string`  | Footer text                                                                             |
| `CUSTOM_LOGO_SVG`                           | `string`  | Base64 encoded svg                                                                      |
| `CUSTOM_TENANT_TEXT`                        | `string`  | Custom tenant text override                                                             |
| `LOGIN_URL`                                 | `string`  | Login endpoint. `/oauth/token`                                                          |
| `LOGOUT_URL`                                | `string`  | Logout endpoint. `/oauth/logout`                                                        |
| `LOGIN_USERNAME_FIELD`                      | `string`  | Field from login endpoint response. `name`                                              |
| `CUSTOMIZATION_API_GROUP`                   | `string`  | API group for customization resources. `front.in-cloud.io`                              |
| `CUSTOMIZATION_API_VERSION`                 | `string`  | API version for customization resources. `v1alpha1`                                     |
| `CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL`  | `string`  | Resource plural name for navigation settings. `navigations`                             |
| `CUSTOMIZATION_NAVIGATION_RESOURCE_NAME`    | `string`  | Resource name for navigation settings. `navigation`                                     |
| `CUSTOMIZATION_SIDEBAR_FALLBACK_ID`         | `string`  | `spec.id` to find in `sidebars` to fallback. Use `-namespaced` for NS-pages             |
| `USE_NAMESPACE_NAV`                         | `boolean` | Use namespaces instead of project/instances. `true`                                     |
| `HIDE_NAVIGATION`                           | `boolean` | Hide navigation container (also navigation plugin).                                     |
| `HIDE_BREADCRUMBS`                          | `boolean` | Hide breadcrumbs container.                                                             |
| `BREADCRUMBS_NO_MARGIN_TOP`                 | `boolean` | Breadcrumbs with no margin-top.                                                         |
| `USE_NEW_NAVIGATION`                        | `boolean` | Cluster selector in sidebar. NS selector where it needs to be.                          |
| `HIDE_INSIDE`                               | `boolean` | Use namespaces instead of project/instances. `true`                                     |
| `NAVIGATE_FROM_CLUSTERLIST`                 | `string`  | Location to be navigated after selecting cluster. `/openapi-ui/clusters/~recordValue~`  |
| `PROJECTS_API_GROUP`                        | `string`  | API group for projects resources. If not using namespace nav.                           |
| `PROJECTS_API_VERSION`                      | `string`  | API version for projects resources. If not using namespace nav.                         |
| `PROJECTS_PLURAL`                           | `string`  | Plural name for projects resources. If not using namespace nav.                         |
| `INSTANCES_API_GROUP`                       | `string`  | API group for instances resources. If not using namespace nav.                          |
| `INSTANCES_API_VERSION`                     | `string`  | API version for instances resources. If not using namespace nav.                        |
| `INSTANCES_PLURAL`                          | `string`  | Plural name for instances resources. If not using namespace nav.                        |
| `MARKETPLACE_PLURAL`                        | `string`  | Plural name for marketplace resources for related factory component.                    |
| `MARKETPLACE_KIND`                          | `string`  | Kind name for marketplace resources for related factory component.                      |
| `NODE_TERMINAL_DEFAULT_PROFILE`             | `string`  | Default profile for node terminal component. `baseline`                                 |
| `REMOVE_BACKLINK`                           | `boolean` | Remove backlink arrow from right-side navigation.                                       |
| `REMOVE_BACKLINK_TEXT`                      | `boolean` | Remove backlink text from right-side navigation.                                        |
| `DOCS_URL`                                  | `string`  | URL to navigate from question mark.                                                     |
| `SEARCH_TABLE_CUSTOMIZATION_PREFIX`         | `string`  | Search tables Customization id prefix.                                                  |
| `BASE_FACTORY_NAMESPACED_API_KEY`           | `string`  | Base factory key for namespaced API resources.                                          |
| `BASE_FACTORY_CLUSTERSCOPED_API_KEY`        | `string`  | Base factory key for clusterscoped API resources.                                       |
| `BASE_FACTORY_NAMESPACED_BUILTIN_KEY`       | `string`  | Base factory key for namespaced builtin (v1) resources.                                 |
| `BASE_FACTORY_CLUSTERSCOPED_BUILTIN_KEY`    | `string`  | Base factory key for clusterscoped builtin (v1) resources.                              |
| `BASE_NAMESPACE_FACTORY_KEY`                | `string`  | Base factory key for namespaces.                                                        |
| `CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP`   | `string`  | Custom namespace resource: api group.                                                   |
| `CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION` | `string`  | Custom namespace resource: api version.                                                 |
| `CUSTOM_NAMESPACE_API_RESOURCE_PLURAL`      | `string`  | Custom namespace resource: plural name.                                                 |
| `SELECTOR_WIDTH_CLUSTER`                    | `string`  | Selector width for cluster: `200px`                                                     |
| `SELECTOR_WIDTH_NAMESPACE`                  | `string`  | Selector width for namespace: `200px`                                                   |
| `SELECTOR_WIDTH_PROJECT`                    | `string`  | Selector width for project: `200px`                                                     |
| `SELECTOR_WIDTH_INSTANCE`                   | `string`  | Selector width for instance: `200px`                                                    |
| `MF_PLUGINS_NO_CLUSTER`                     | `string`  | JSON for Plugins Manifest.                                                              |
| `THEME_TOKENS_COLORS_LIGHT`                 | `string`  | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COLORS_DARK`                  | `string`  | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_SIZES`                        | `string`  | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COMPONENTS_LIGHT`             | `string`  | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_COMPONENTS_DARK`              | `string`  | JSON for AntD Tokens: check [this](https://ant.design/theme-editor) out.                |
| `THEME_TOKENS_USE_MERGE_STRATEGY`           | `boolean` | Use merge instead of replace for theme tokens. Doesn't work for components.             |

## 🤝 Contributing

[Check this out](./CONTRIBUTING.md)
