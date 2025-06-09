import './App.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Homepage from './components/Homepage.jsx'
import Root from './Root.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Homepage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
