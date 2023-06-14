import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import IndexPage from './IndexPage'

import Page1 from "./Page1";
import Page2 from "./Page2";

function createRouter(appProps) {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="page1" element={<Page1/>} />
        <Route path="page2" element={<Page2/>} />
        <Route index element={<IndexPage appProps={appProps} />}/>
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
