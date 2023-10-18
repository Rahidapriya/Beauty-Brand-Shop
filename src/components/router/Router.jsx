import {
    createBrowserRouter,
  
  } from "react-router-dom";

// import Login from "../pages/login/Login";
// import Register from "../pages/register/Register";
// import Home from "../pages/home/Home";
import Roott from "../../layouts/Roott";


import Home from "../../pages/home/Home";



import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ErrorPage from "../../pages/errorpage/ErrorPage"
import AddProduct from "../../pages/addproduct/AddProduct";
import AllProduct from "../../pages/allproduct/AllProduct";
import UpdateProduct from "../../pages/updateProduct/UpdateProduct";
// import ErrorPage from "../../pages/errorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roott></Roott>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5003/brandcard')
        },
      
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
          },
          
       
       {
        path:'/allproduct',
        element:<AllProduct></AllProduct>,
        loader:()=>fetch('http://localhost:5003/products')
       },
       {
        path:'/allproduct/updateproduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5003/products/${params.id}`)
      },
        
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;