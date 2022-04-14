import React from 'react';
import ImageComponent from './ImageComponent';

import './Carousel.css';

const Carousel = ({ data }) => {
    return (
        <div
            id="carousel-main"
            // onScrol={(e) => console.log('##', e)}
            className="images-carousel"
        >
            {data.map((image, index) => (
                <ImageComponent {...image} />
            ))}
        </div>
    );
};

export default Carousel;
