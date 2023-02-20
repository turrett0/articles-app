import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Arrow } from '../../assets/icons'
import { SGoBack } from './GoBack.styled'

const GoBack = () => {
  const location = useLocation()
  const previousLocation = location.state ? location.state.from : '/'

  return (
    <Link to={previousLocation}>
      <SGoBack>
        <Arrow />
      </SGoBack>
    </Link>
  )
}

export default GoBack
