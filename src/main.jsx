import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPlace from './views/NewPlace'
import Root from './views/Root'
import PlaceList from './components/PlaceList'


const routing = createBrowserRouter([
  { path : "/", element : <Root/>, 
  children : [{ path : "/", element : <PlaceList/>},
              { path : "/create", element : <NewPlace/>}]},
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routing}/>
  </React.StrictMode>,
)
