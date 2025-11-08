export const renderLogo = (customLogo: string, colorText: string): JSX.Element | null => {
  if (customLogo) {
    // Decode base64 SVG and replace all fill placeholders
    try {
      const decodedSvg = atob(customLogo)
      // Replace all instances of {token.colorText} with actual color
      const svgWithFill = decodedSvg.replace(/\{token\.colorText\}/g, `"${colorText}"`)
      // eslint-disable-next-line react/no-danger
      return <div dangerouslySetInnerHTML={{ __html: svgWithFill }} />
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error decoding custom logo:', error)
      return null
    }
  }
  return null
}
