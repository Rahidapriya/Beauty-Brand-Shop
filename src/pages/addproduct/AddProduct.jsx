

import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [brand_name , setBrand_name] = useState('');
  const handleBrandRadioChange = (e) => {
    setBrand_name(e.target.value);
  };
  const handleAddProduct=event=>{
    // const type = selectedOption;
    event.preventDefault()
  const form = event.target;
  const photo = form.photo.value;
  const name = form.name.value;
  const price = form.price.value;
  const rating = form.rating.value;
  const desp = form.desp.value;

  const newProduct = { selectedOption,brand_name
    , name, price, rating, desp, photo };
  console.log(newProduct);

   
    fetch('https://brand-shop-server-4mhtjjmoc-rahidapriyas-projects.vercel.app/products',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newProduct)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
       })


 
}
  

  useEffect(()=>{
    AOS.init({duration:'1000'})
  })
    return (
        <div>

  
        <div>
            <Navbar></Navbar>
            <div>


            <div className='flex flex-col items-center justify-center mt-20 ' id='services'>
             <h3 className='text-amber-500'> Add Your choosing Products</h3>
             <h1 className='text-purple-950 text-2xl md:text-4xl font-metamorphous font-bold text-center'>__Add Your Product__</h1>
            </div>       
<div className="flex items-center justify-center p-12">


 
  <div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md" data-aos="fade-up">
    <form  onSubmit={handleAddProduct}>
     
      <div className="mb-5">
        <label
          // for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Add the product image
        </label>
        <input
          type="text"
          name="photo"
          id="photo"
          placeholder="image_URL"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      {/* name */}
      <div className="mb-5">
        <label
          // for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Add the product Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/*  */}
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Brand Name
        </label>
        <div className=" items-center  mt-6 block ">
        <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand1"
              value="Chanel"
        checked={brand_name === 'Chanel'}
        onChange={ handleBrandRadioChange }
              className="h-5 w-5"
            />
            <label
              // for="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
           Chanel
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand2"
              value="Dior"
              checked={brand_name === 'Dior'}
              onChange={handleBrandRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
          Dior
            </label>
          </div>

          {/*  */}
          <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand3"
              value="Estee Lauder"
              checked={brand_name === 'Estee Lauder'}
              onChange={handleBrandRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton3"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
          Estee Lauder
            </label>
          </div>
         
          {/*  */}

          <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand4"
              value="L'Oreal"
              checked={brand_name === "L'Oreal"}
              onChange={handleBrandRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton4"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
          L'Oreal
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand5"
              value="Revlon"
              checked={brand_name === 'Revlon'}
              onChange={handleBrandRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton5"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
            Revlon
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="radiobrand"
              id="radiobrand6"
              value="Urban Decay"
              checked={brand_name === 'Urban Decay'}
              onChange={handleBrandRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton6"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Urban Decay
            </label>
          </div>

        </div>
      </div>
      {/*  */}
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Which type of product you want to add?
        </label>
        <div className=" items-center  mt-6 block ">
        <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              value="lipstick"
        checked={selectedOption === 'lipstick'}
        onChange={ handleRadioChange }
              className="h-5 w-5"
            />
            <label
              // for="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
            Lipstick
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              value="eyeshadow"
              checked={selectedOption === 'eyeshadow'}
              onChange={handleRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
           Eyeshadow
            </label>
          </div>

          {/*  */}
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton3"
              value="perfume"
              checked={selectedOption === 'perfume'}
              onChange={handleRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton3"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
           Perfume
            </label>
          </div>
         
          {/*  */}

          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton4"
              value="facewash"
              checked={selectedOption === 'facewash'}
              onChange={handleRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton4"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
           Facewash
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton5"
              value="maskara"
              checked={selectedOption === 'maskara'}
              onChange={handleRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton5"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Maskara
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton6"
              value="nailpolish"
              checked={selectedOption === 'nailpolish'}
              onChange={handleRadioChange}
              className="h-5 w-5"
            />
            <label
              // for="radioButton6"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Nailpolish
            </label>
          </div>

        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              // for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
             Price
            </label>
            <input
              type="text"
              
              name="price"
              id="price"
              placeholder=" Price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>


      
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              // for="rating"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Add Product Rating
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="Rating"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

{/*  */}
      <div className="mb-5">
        <label
          // for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Add Short Description
        </label>
        <input
          type="text"
          name="desp"
          id="desp"
          placeholder="Description"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      

      {/* <div className="-mx-3 flex flex-wrap">
        <p className='mb-3 block text-base font-medium text-[#07074D] ml-3'>What time would you prefer for a meeting with us?</p>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div> */}

    

      <div>
       <button type='submit'
         className="hover:shadow-form rounded-md hover:bg-purple-950 py-3 px-8 text-center text-base font-semibold text-white outline-none w-full bg-amber-500 "
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
</div>
            </div>
            <Footer></Footer>
        </div>
    


        </div>
    );
};

export default AddProduct;