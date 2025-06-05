import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
export const themeRoles = {
    primary: 'indigo',
    secondary: 'gray',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
    info: 'blue',
  }
export const colors = fullConfig.theme.colors
export const spacing = fullConfig.theme.spacing
export const fontSize = fullConfig.theme.fontSize
export const boxShadow = fullConfig.theme.boxShadow
export const borderRadius = fullConfig.theme.borderRadius
export const zIndex = fullConfig.theme.zIndex