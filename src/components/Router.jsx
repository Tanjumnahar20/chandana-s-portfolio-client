import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ProjectDetails from "./Projects/ProjectDetails";
import Contact from "./Contacts/Contact";
  
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
        {
          path:'/projects/:id',
          loader:async ({ params }) => {
            const response = await fetch(`http://localhost:5000/projects/${params.id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch project data");
            }
            const data = await response.json();
            return { project: data }
          },
          element:<ProjectDetails></ProjectDetails>
        },
        {
          path:'/skills',
          element:<Skills></Skills>
        },
        {
          path:'/contacts',
          element:<Contact></Contact>
        },
      ]
    },
  ]);

export default Router;