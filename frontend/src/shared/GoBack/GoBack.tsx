import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Arrow } from '../../assets/icons'
// import { SGoBack } from './GoBack.styled'


type Props = {
  to?: string
}

const GoBack: FC<Props> = ({ to }) => {
  const location = useLocation()
  const previousLocation = to ? to : location.state ? location.state.from : '/'

  return (
    <Link to={previousLocation}>
      <div>
        <Arrow />
      </div>
    </Link>
  )
}

export default GoBack
