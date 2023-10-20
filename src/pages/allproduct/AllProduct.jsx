import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../../shared/navbar/Navbar';
import AddSlider from './AddSlider';
import Footer from '../../shared/footer/Footer';

const AllProduct = () => {
  const products = useLoaderData();
  const { brand_name } = useParams();

  // Check if there are no available products
  if (products.length === 0) {
    return (
      <div>
        <Navbar></Navbar>
        {/* <AddSlider></AddSlider> */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <h2 className='text-center text-3xl font-bold'>No available products</h2>
</div>
<Footer></Footer>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <AddSlider></AddSlider>
      <h2 className='text-center text-3xl m-10 font-bold'>Available Products: {products.length}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-20 my-16'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))
    }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProduct;
