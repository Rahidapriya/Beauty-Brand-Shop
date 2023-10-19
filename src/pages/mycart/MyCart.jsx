import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";


const MyCart = () => {
    const loadedCart =useLoaderData();
    const [myCarts,setMyCarts]= useState(loadedCart);
    console.log(loadedCart);
    // const {_id, selectedOption,brand_name, name, price, rating, desp, photo }=myCarts;
    return (
        <div>
            
            <div className="flex justify-between border-b pb-8 m-20">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{myCarts.length} Items</h2>
          </div>
          {
              myCarts.map(myCart=><MyCartCard key={myCart._id}
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