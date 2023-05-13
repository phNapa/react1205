import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Create from './pages/create'

//define rotas web
const router = createBrowserRouter(
  [{
    path: '/',
    element: <Home />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/create',
    element: <Create />
  }]
)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider>

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />

      </QueryClientProvider>

    </ChakraProvider>

  </React.StrictMode>,
)
