import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import App from '../App'

import Page1 from "./Page1";

function createRouter(appProps) {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App appProps={appProps}><Outlet /></App>}>
        <Route path="page1" element={<Page1/>} />
        <Route path="page2" element={<Page2/>} />
      </Route>
    )
  );
}

function Router(appProps) {
  return (
    <RouterProvider router={createRouter(appProps)} />
  );
}

export default Router
