import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyCart = () => {
    const {user}=useContext(AuthContext)
    const loadedCart =useLoaderData();
    const [myCarts,setMyCarts]= useState(loadedCart);
    const [filteredProducts,setFilteredProducts]= useState([]);
     
    useEffect(()=>{
        user && user?.email &&
         setFilteredProducts (loadedCart.filter((product) => product.userEmail === user.email));
    },[user])
    // console.log(loadedCart);
    // const {_id, selectedOption,brand_name, name, price, rating, desp, photo }=myCarts;
    return (
        <div>
            
            <div className="flex justify-between border-b pb-8 m-20">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{filteredProducts.length} Items</h2>
          </div>
          {
              filteredProducts.map(myCart=><MyCartCard key={myCart._id}
                 myCart={myCart}
                 myCarts={ myCarts}
                 setMyCarts={setMyCarts}
                 >
                   
                 </MyCartCard>)
          }
             
        </div>
    );
};

export default MyCart;