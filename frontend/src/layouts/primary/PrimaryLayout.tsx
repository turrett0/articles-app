//router
import { Outlet } from 'react-router-dom'

//components
import { Header } from '../../features/header/Header'

export const PrimaryLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}
