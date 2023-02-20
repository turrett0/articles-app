//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components


//pages
import { Home } from './pages'

//redux
import { Provider } from 'react-redux'
import { store } from './store'

//theme
import { ThemeProvider } from 'styled-components'
import { appTheme } from './theme'

//antd
import 'antd/dist/reset.css'
import Article from './features/article/Article'
import { PrimaryLayout } from './layouts'

function App() {
  const router = createBrowserRouter([
    {
      element: <PrimaryLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/article/:id',
          element: <Article />,
        },
      ],
    },
  ])

  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
