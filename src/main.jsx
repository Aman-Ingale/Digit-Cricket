import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router'
import Toss from './Components/Toss/Toss.jsx'
import Start from './Components/Start/Start.jsx'
import Layout from '../Layout.jsx'
import TossProvider from './Contexts/TossProvider.jsx'
import Match from './Components/Match/Match.jsx'
import TeamSelection from './Components/TeamSelection/TeamSelection.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Start />} />
      <Route path='toss' element={<Toss />} />
      <Route path='match' element={<Match />} />
      <Route path='team' element={<TeamSelection />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
