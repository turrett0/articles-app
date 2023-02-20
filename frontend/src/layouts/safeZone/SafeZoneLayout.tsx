import { FC, ReactNode } from 'react'
import { SSavedZone } from './SafeZone.styled'

type Props = {
  children: ReactNode
}

export const SafeZone: FC<Props> = ({ children }) => {
  return <SSavedZone>{children}</SSavedZone>
}


