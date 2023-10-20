import { Link, useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";


const MyCart = () => {
    const {user}=useContext(AuthContext)
    const loadedCart =useLoaderData();
    const [myCarts,setMyCarts]= useState(loadedCart);
    const [filteredProducts,setFilteredProducts]= useState([]);
    //  const {brand_name}=loadedCart;
    useEffect(()=>{
        user && user?.email &&
         setFilteredProducts (loadedCart.filter((product) => product.userEmail === user?.email));
    },[user])
    // console.log(loadedCart);
    // const {_id, selectedOption,brand_name, name, price, rating, desp, photo }=myCarts;
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between border-b pb-8 m-20">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{filteredProducts.length} Items</h2>
          </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 my-10 gap-10"> 
        {
              filteredProducts.map(myCart=><MyCartCard  key={myCart._id}
                 myCart={myCart}
                 myCarts={ myCarts}
                 setMyCarts={setMyCarts}
                 >
                   
                 </MyCartCard>)
          }
        </div>
        <Link to='/'>  <button className="flex font-semibold text-indigo-600 text-sm mt-10 m-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
           Continue Shopping
          </button></Link>
            <Footer></Footer> 
        </div>
    );
};

export default MyCart;