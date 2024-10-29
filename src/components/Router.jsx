import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/projects',
          element:<Projects></Projects>
        },
      ]
    },
  ]);

export default Router;