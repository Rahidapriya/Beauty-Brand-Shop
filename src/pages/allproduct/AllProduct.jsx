
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../../shared/navbar/Navbar';
import AddSlider from './AddSlider';
 
 const AllProduct = () => {
    const products = useLoaderData();
    const { brand_name } = useParams();
    // const filteredProducts = products.filter((product) => product.brand_name === brand_name);
    // console.log(filteredProducts);

    return (
        <div>
            <Navbar></Navbar>
            <AddSlider></AddSlider>
            <h2 className='text-center text-3xl m-10 font-bold'>Available Product:{products.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-20'>
           {
            products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
           }

{/* {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))} */}
            </div>
        </div>
    );
 };
 
 export default AllProduct;