import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

declare module 'styled-components' {
    export interface DefaultTheme extends defaultThemeType { }
}