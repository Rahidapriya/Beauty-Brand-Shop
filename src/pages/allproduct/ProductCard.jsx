/* eslint-disable react/prop-types */


const ProductCard = ({product}) => {
    const { selectedOption, name, price, rating, desp, photo }=product;
    return (
        <div>
             <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
     src={photo}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div></div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
     Product Name:{name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     Type: {selectedOption}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Price:{price}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Rating:{rating}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {desp}
    </p>
    <a className="inline-block" href="#">
      {/* <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
         strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
           strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button> */}
     <div > <button className="btn mx-5 ">Details</button>
      <button className="btn mx-5 ">Update</button></div>
    </a>
  </div>
</div>
        </div>
    );
};

export default ProductCard;