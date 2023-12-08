import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Root from "./Component/Layout/Root";
import AuthProvider from "./Component/Provider/AuthProvider";

import Home from "./Component/Home/Home";
import ErrorPage from "./Component/ErrorPage/Errorpage";
import AddProduct from "./Component/AddProduct/AddProduct";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import UpdateProduct from "./Component/UpdateProduct/UpdateProduct";
import Product from "./Component/Product/Product";
import ProdDetails from "./Component/ProdDetails/ProdDetails";
import MyCart from "./Component/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: 
        <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>,
      },
      {
        path: "/myCart",
        element: 
        <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: () => fetch("https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd")
      },
      {
        path: "/updateProduct/:id",
        element: 
        <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd/${params.id}`)
      },
      {
        path: "/prodDetails/:id",
        element: 
        <PrivateRoute>
          <ProdDetails></ProdDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd/${params.id}`)

      },
      {
        path: "/product/:id",
        element: 
        <PrivateRoute>
          <Product></Product>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd/${params.id}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
