// styled.d.ts
import 'styled-components'
import { ITheme } from '../src/theme/models'
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export type DefaultTheme = ITheme
}
