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
          loader:()=>fetch('https://brand-shop-server-kqrwaufgm-rahidapriyas-projects.vercel.app/brandcard')
        },
      
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
          },
          
       
      //  {
      //   path:'/allproduct',
      //   element:<AllProduct></AllProduct>,
      //   loader:()=>fetch('https://brand-shop-server-4mhtjjmoc-rahidapriyas-projects.vercel.app/products')
      //  },
       {
path:'/allproduct/:brand_name',
element:<AllProduct></AllProduct>,
loader:({params})=>fetch(`https://brand-shop-server-kqrwaufgm-rahidapriyas-projects.vercel.app/productsbybrand/${params.brand_name}`)
       },
       {
        path:'/updateproduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`https://brand-shop-server-kqrwaufgm-rahidapriyas-projects.vercel.app/products/${params.id}`)
      },
      {
        path:'/detailsproduct/:id',
        element:<DetailsProduct></DetailsProduct>,
        loader:({params})=>fetch(`https://brand-shop-server-kqrwaufgm-rahidapriyas-projects.vercel.app/products/${params.id}`)
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>,
        loader:()=>fetch(`https://brand-shop-server-kqrwaufgm-rahidapriyas-projects.vercel.app/addtocart`)
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