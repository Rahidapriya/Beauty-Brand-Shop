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
import DetailsProduct from "../../pages/detailsProduct/DetailsProduct";
import MyCart from "../../pages/mycart/MyCart";
import PrivateRoute from "./PrivateRoute";

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
          loader:()=>fetch('https://brand-shop-server-swart-omega.vercel.app/brandcard')
        },
      
        {
            path:"/addproduct",
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
          },
          
       
  {
path:'/allproduct/:brand_name',
element:<AllProduct></AllProduct>,
loader:({params})=>fetch(`https://brand-shop-server-swart-omega.vercel.app/productsbybrand/${params.brand_name}`)
       },
       {
        path:'/updateproduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`https://brand-shop-server-swart-omega.vercel.app/products/${params.id}`)
      },
      {
        path:'/detailsproduct/:id',
        element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader:({params})=>fetch(`https://brand-shop-server-swart-omega.vercel.app/products/${params.id}`)
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch(`https://brand-shop-server-swart-omega.vercel.app/addtocart`)
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