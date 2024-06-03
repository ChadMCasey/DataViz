
import React from "react";
import ReactDOM from 'react-dom/client';
import {RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements, 
        Route, 
        Link} from "react-router-dom";
import { Layout } from "./components";
import { redirect } from "react-router-dom";
import { Overview, All, Create, ReadMe} from "./pages";

const router = createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<Layout/>}>
    <Route path='overview' element={<Overview/>}>
        <Route index element={<All/>}/>
    </Route>
    <Route path="create" element={<Create/>}/>
    <Route path="ReadMe" element={<ReadMe/>}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
