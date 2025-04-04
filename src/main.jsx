import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import AddSubscriptionForm from './pages/AddSubscriptionForm'
import SelectCategory from './pages/SelectCategory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Bem-vindo!</p>
  },
  {
    path: '/home',
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'add', element: <SelectCategory/> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
