import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ProjectDetails from "./Projects/ProjectDetails";
import Contact from "./Contacts/Contact";
import About from "./About/About";
import CreateBlog from "./Blogs/CreateBlogs";
import BlogList from "./Blogs/BlogList";
import BlogDetails from "./Blogs/BlogDetails";
  
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
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blogs',
          element:<BlogList></BlogList>
        },
        {
          path:'/blogs/:id',
          element:<BlogDetails></BlogDetails>
        },
        {
          path:'/admin/dashboard/create-blogs',
          element:<CreateBlog></CreateBlog>
        },
      ]
    },
  ]);

export default Router;