import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{
    black: string,
    white: string,

    'shadow': string,
    'purple': string,
    'danger': string,

    'gray-dark': string,
    'gray-medium': string,
    'gray-light': string,
    'gray': string,

    'white-background': string,
    'white-details': string,

    'pink-dark': string,
    'pink-light': string,

    'purple-hover': string,
    'danger-hover': string,
    'gray-medium-hover': string,
    'gray-light-hover': string,
  }
}