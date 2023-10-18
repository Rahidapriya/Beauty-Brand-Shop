import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/navbar/Navbar";


const UpdateProduct = () => {
   
    const product=useLoaderData();
const { _id,selectedOption, name, price, rating, desp, photo }=product;
const [upselectedOption, upsetSelectedOption] = useState(product.selectedOption);
    const handleRadioChange = (e) => {
      upsetSelectedOption(e.target.value);
    };
    const handleUpdateProduct=event=>{
      // const type = selectedOption;
      event.preventDefault()
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const desp = form.desp.value;
  
    const updatedProduct = { selectedOption, name, price, rating, desp, photo };
    console.log(updatedProduct);
  
     
      fetch(`http://localhost:5003/products/${_id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(updatedProduct)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          if(data.modifiedCount>0){
              Swal.fire({
                  title: 'Success!',
                  text: 'Product Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
         })
  
  
   
  }
    
  
    // useEffect(()=>{
    //   AOS.init({duration:'1000'})
    // })
    return (
        // <div>update</div>
        <div>
            <Navbar></Navbar>
           <div>


<div className='flex flex-col items-center justify-center mt-20 ' id='services'>
 <h3 className='text-amber-500'> Update Your choosing Products</h3>
 <h1 className='text-purple-950 text-2xl md:text-4xl font-metamorphous font-bold text-center'>__Update Your Product__</h1>
</div>       
<div className="flex items-center justify-center p-12">



<div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md " >
<form  onSubmit={handleUpdateProduct}>

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
defaultValue={photo}
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
defaultValue={name}
id="name"
placeholder="Name"
min="0"
className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
/>
</div>
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
  defaultChecked={upselectedOption === 'lipstick'}
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
  defaultChecked={upselectedOption === 'eyeshadow'}
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
//   defaultValue={selectedOption}
  id="radioButton3"
  value="perfume"
  defaultChecked={upselectedOption === 'perfume'}
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
//   defaultValue={selectedOption}
  id="radioButton4"
  value="facewash"
  defaultChecked={upselectedOption === 'facewash'}
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
//   defaultValue={selectedOption}
  id="radioButton5"
  value="maskara"
  defaultChecked={upselectedOption === 'maskara'}
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
//   defaultValue={selectedOption}
  id="radioButton6"
  value="nailpolish"
  defaultChecked={upselectedOption === 'nailpolish'}
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
  defaultValue={price}
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
  defaultValue={rating}
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
defaultValue={desp}
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
Update Product
</button>
</div>
</form>
</div>
</div>
</div>  
        </div>
    );
};

export default UpdateProduct;