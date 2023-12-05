/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

const MyCartCard = ({myCart,myCarts,setMyCarts}) => {
    const {_id, brand_name,name, price,  photo }=myCart;
  
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