//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components
import { Layout } from './entities'

//pages
import { Home } from './pages'

//redux
import { Provider } from 'react-redux'
import { store } from './store'

//theme
import { ThemeProvider } from 'styled-components'
import { appTheme } from './theme'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
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
