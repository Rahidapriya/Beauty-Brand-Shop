import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AddSlider = () => {
    const [numItems, setNumItems] = useState(3); // Number of items to display

    const imageStyle = {
        width: '700px',
        height: '400px', // To maintain aspect ratio
    };

    // Function to update the number of items based on screen size
    const updateNumItems = () => {
        if (window.innerWidth >= 1024) {
            setNumItems(3); // Large screens
        } else if (window.innerWidth >= 768) {
            setNumItems(2); // Medium screens
        } else {
            setNumItems(1); // Small screens
        }
    };

    useEffect(() => {
        // Initial setup
        updateNumItems();

        // Update on window resize
        window.addEventListener('resize', updateNumItems);

        return () => {
            // Clean up the event listener
            window.removeEventListener('resize', updateNumItems);
        };
    }, []);

    return (
        <div className='mt-10'>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                showStatus={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={100 / numItems}
                useKeyboardArrows={true} // Enable keyboard navigation
                swipeable={true} // Enable swipe gestures on touch devices
            >
                <div>
                    <img src="https://i.ibb.co/GH2GHr4/dior-nailpolish.jpg" alt="Nail Polish" style={imageStyle} />
                </div>
                <div>
                    <img src="https://i.ibb.co/c6JJ6rD/chanel-perfume.jpg" alt="Nail Polish" style={imageStyle} />
                </div>
                <div>
                    <img src="https://i.ibb.co/WKfJ03Z/chanel-eyeshadow.jpg" alt="Lipstick" style={imageStyle} />
                </div>
                <div>
                    <img src="https://i.ibb.co/XxP37WY/Estee-Lauder-Nailpolish.jpg" alt="Nail Polish" style={imageStyle} />
                </div>
                {/* <div>
                    <img src="hhttps://i.ibb.co/0fxTN6Q/dior-perfume.jpg" alt="Lipstick" style={imageStyle} />
                </div> */}
                <div>
                    <img src="https://i.ibb.co/Q8RCStc/loreal-eyeshadow.jpg" alt="Nail Polish" style={imageStyle} />
                </div>
                <div>
                    <img src="https://i.ibb.co/RCXpxNZ/revlon-facewash.jpg" alt="Lipstick" style={imageStyle} />
                </div>
            </Carousel>
        </div>
    );
};

export default AddSlider;
