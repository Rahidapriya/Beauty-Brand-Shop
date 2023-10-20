
import About from '../../components/about/About';
import BrandsCard from '../../components/brandcard/BrandsCard';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import Footer from '../../shared/footer/Footer';
import Navbar from '../../shared/navbar/Navbar';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const cards=useLoaderData();
    // const {_id,name,photo}=cards
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>

            <div className='flex flex-col items-center justify-center mt-20 ' id='services' data-aos="fade-up">
             <h3 className='text-amber-500 text-center'>Choose Your Brand</h3>
             <h1 className='text-purple-950 text-2xl md:text-4xl font-metamorphous font-bold text-center'>__Our Brands__</h1>
            </div>
          <div className='flex flex-col items-center w-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 lg:my-20 gap-6">
                                {
                                    cards.map(card=><BrandsCard key={card._id} card={card}></BrandsCard>)
                                }
                </div>
          </div>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;