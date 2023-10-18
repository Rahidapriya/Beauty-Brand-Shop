
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../../shared/navbar/Navbar';
 
 const AllProduct = () => {
    const products = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-3xl m-10 font-bold'>Available Product:{products.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-20'>
           {
            products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
           }
            </div>
        </div>
    );
 };
 
 export default AllProduct;