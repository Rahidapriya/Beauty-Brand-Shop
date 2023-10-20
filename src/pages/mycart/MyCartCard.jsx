/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

const MyCartCard = ({myCart,myCarts,setMyCarts}) => {
    const {_id, brand_name,name, price, rating, desp, photo }=myCart;
  
    // delete
    const handleDelete = _id =>{
        console.log("deleteid:",_id);
    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
          
            console.log('delete confirm');
            fetch(`https://brand-shop-server-4mhtjjmoc-rahidapriyas-projects.vercel.app/addtocart/${_id}`,{
                method:'DELETE'
                
            })
            .then(res =>res.json())
            .then (data => {
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your coffee has been deleted.',
                        'success'
                      )
                      const remaining = myCarts.filter(cart=>cart._id!==_id);
                      setMyCarts(remaining);
                }
            })
            }
          })
       }
    return (
    //     <div>
          
    //         <div className="container  lg:mt-10 lg:mx-20">
    //   <div className="flex shadow-md lg:my-10">
    //     <div className="lg:w-3/4 w-full bg-white lg:px-10 py-10">
         
    //       <div className="flex mt-10 mb-5">
    //         <h3 className="font-semibold text-gray-600 text-xs uppercase lg:w-2/5 w-full ">Product Details</h3>
    //         {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3> */}
    //         <h3 className="font-semibold  text-gray-600 text-xs uppercase lg:w-1/5 w-full text-center">Price</h3>
    //         {/* <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3> */}
    //       </div>
    //       {/* Product 1 */}
    //       <div className="flex flex-col lg:flex-row items-center hover:bg-gray-100 lg:-mx-8 lg:px-6 lg:py-5">
    //         <div className="flex lg:w-2/5 w-full">
    //           <div className="lg:w-20 w-full">
    //             <img className="h-24" src={photo}alt="" />
    //           </div>
    //           <div className="flex flex-col justify-between ml-4 flex-grow">
    //             <span className="font-bold text-sm">{name}</span>
    //             <span className="text-red-500 text-xs">{brand_name}</span>
    //             <button onClick={()=>handleDelete(_id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
    //           </div>
    //         </div>
    //         <div className="flex justify-center w-full lg:w-1/5">
              
    //            <span className="text-center lg:w-1/5 w-full font-semibold text-sm">${price}</span>
             
    //         </div>
    //       </div>

       

    //     <Link to='/allproduct'>  <button className="flex font-semibold text-indigo-600 text-sm mt-10">
    //         <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
    //           <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    //         </svg>
    //         Continue Shopping
    //       </button></Link>
    //     </div>

       
    //   </div>
    // </div>
    
    //     </div>
    <div>
      <div className="hero h-96 bg-base-200 ">
  <div className="hero-content flex-col justify-center items-center lg:flex-row">
    <img src={photo} className=" w-40 rounded-lg " />
    <div>
      <h1 className="text-2xl font-bold">{brand_name}</h1>
      <div className='flex justify-between items-center'>
      <p className="py-6">{name}</p>
      <p className="py-6">{price}$</p>
      </div>
      <div className="flex flex-col justify-between  flex-grow">
              
               <button onClick={()=>handleDelete(_id)} className="font-semibold mt-10 hover:text-red-500 text-gray-500 text-xs">Remove</button>
              </div>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
    );
};

export default MyCartCard;