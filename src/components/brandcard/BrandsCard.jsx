import React from 'react';
import { Link } from 'react-router-dom';

const BrandsCard = ({card}) => {
    const {brand_name,image_url,_id}=card
    return (
        <div> 
          {/* <button> <Link to={`/product/${id}`}> */}
            <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  h-72 rounded-xl bg-clip-border">
    <img
      src={card.image_url} className='h-full'
    />
  </div>
  
  <div className="p-6">
   
   
  </div>
  <div className="p-6 pt-0 font-bold text-2xl text-center text-pink-500">
    
     {card.brand_name}
   
  </div>
</div>
            </div>
            {/* </Link></button> */}
        </div>
    );
};

export default BrandsCard;