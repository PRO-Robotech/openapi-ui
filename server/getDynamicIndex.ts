export const getDynamicIndex = (baseprefix: string): string => {
  try {
    const mainJs = 'index-react.js'
    const mainCss = 'style.css'
    const titleText = process.env.TITLE_TEXT || 'OpenAPI UI'
    const iconSvg = process.env.ICON_SVG || ''

    // Generate favicon from SVG if provided
    const generateFavicon = (): string => {
      if (!iconSvg) return ''
      try {
        // If iconSvg is base64-of-base64, unwrap once
        const maybeInner = Buffer.from(iconSvg, 'base64').toString('utf8')
        const payload =
          /^[A-Za-z0-9+/=\n\r]+$/.test(maybeInner) && !maybeInner.trim().startsWith('<')
            ? maybeInner // double-encoded → use inner base64
            : iconSvg // single-encoded → already fine

        const dataUri = `data:image/svg+xml;base64,${payload}`
        return `<link rel="icon" type="image/svg+xml" href="${dataUri}">`
      } catch (e) {
        console.error('Error processing icon SVG:', e)
        return ''
      }
    }

    return `<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <title>${titleText}</title>
    ${generateFavicon()}
    <style>
      html,
      body,
      #root {
        min-height: 100%;
        margin: 0;
      }

      .incloud-bootloader {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: #f5f5f5;
        color: #1f1f1f;
        font-family: Roboto, Arial, sans-serif;
      }

      /*
        Spinner — vanilla CSS copy of antd <Spin /> (antd 5.26.4).
        Source: node_modules/antd/es/spin/style/index.js
        Token values used (antd defaults):
          dotSize    = controlHeightLG / 2 = 40 / 2 = 20px
          dotItem    = (dotSize - marginXXS / 2) / 2 = (20 - 2) / 2 = 9px
          colorPrimary in this project (light theme) = #3B82F6
            — global token from constants/colors.ts (NOT the per-Button override)
        On antd upgrade or theme token change — re-verify against the source.
      */
      .incloud-bootloader__dot-holder {
        display: inline-block;
        width: 1em;
        height: 1em;
        font-size: 20px;
        line-height: 1;
        color: #3b82f6;
        transform-origin: 50% 50%;
      }

      .incloud-bootloader__dot {
        position: relative;
        display: inline-block;
        width: 1em;
        height: 1em;
        font-size: 20px;
        transform: rotate(45deg);
        animation: incloud-bootloader-rotate 1.2s linear infinite;
      }

      .incloud-bootloader__dot-item {
        position: absolute;
        display: block;
        width: 9px;
        height: 9px;
        background: currentColor;
        border-radius: 100%;
        transform: scale(0.75);
        transform-origin: 50% 50%;
        opacity: 0.3;
        animation: incloud-bootloader-pulse 1s linear infinite alternate;
      }

      .incloud-bootloader__dot-item:nth-child(1) {
        top: 0;
        left: 0;
        animation-delay: 0s;
      }

      .incloud-bootloader__dot-item:nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: 0.4s;
      }

      .incloud-bootloader__dot-item:nth-child(3) {
        right: 0;
        bottom: 0;
        animation-delay: 0.8s;
      }

      .incloud-bootloader__dot-item:nth-child(4) {
        bottom: 0;
        left: 0;
        animation-delay: 1.2s;
      }

      .incloud-bootloader__text {
        font-size: 14px;
        line-height: 22px;
      }

      @keyframes incloud-bootloader-rotate {
        to {
          transform: rotate(405deg);
        }
      }

      @keyframes incloud-bootloader-pulse {
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      <div class="incloud-bootloader" role="status" aria-live="polite">
        <span class="incloud-bootloader__dot-holder" aria-hidden="true">
          <span class="incloud-bootloader__dot">
            <i class="incloud-bootloader__dot-item"></i>
            <i class="incloud-bootloader__dot-item"></i>
            <i class="incloud-bootloader__dot-item"></i>
            <i class="incloud-bootloader__dot-item"></i>
          </span>
        </span>
        <div class="incloud-bootloader__text">Loading...</div>
      </div>
    </div>
    <script src="${baseprefix}/env.js"></script>
    <script type="module" crossorigin src="${baseprefix}/${mainJs}"></script>
    <link rel="stylesheet" crossorigin href="${baseprefix}/${mainCss}">
  </body>
</html>
`
  } catch {
    return 'Error while trying'
  }
}
