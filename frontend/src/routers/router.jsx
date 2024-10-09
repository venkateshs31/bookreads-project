import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../dashboard/SignUp";
import Login from "../dashboard/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/book/:id",
        element:<SingleBook/>,
        loader: ({params}) => fetch(`https://bookreads-project-backend.onrender.com/book/${params.id}`)
      },
    ]
    },
    {
      path: "/admin",
      element:<DashboardLayout/>,
      children: [
        {
          path: "/admin/upload",
          element:<UploadBook/>
        },
        {
          path: "/admin/manage",
          element:<ManageBook/>
        },
        {
          path: "/admin/edit-book/:id",
          element:<EditBook/>,
          loader: ({params}) => fetch(`https://bookreads-project-backend.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/sign-up",
      element:<SignUp/>
    },
    {
      path: "/admin/login",
      element: <Login/>   
    }
  ]);

  export default router;
