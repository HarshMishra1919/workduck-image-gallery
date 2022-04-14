import React from 'react';
import './App.css';
import axios from 'axios';
import Carousel from './components/Carousel';

import shuffleIcon from './assets/shuffle-icon.png';
import angleLeft from './assets/angle_left_icon.svg';
import angleRight from './assets/angle_right_icon.svg';

const getApiForRandomPhoto = (count) => {
    return `https://api.unsplash.com/photos/random/?count=${count}&client_id=7NkjHFJcfMBi3g4a3U5B7xTP4TO8UqKvUMis1Jr3Ne4`;
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomPhoto = async () => {
    const randomNumber = randomIntFromInterval(7, 15);
    const apiPath = getApiForRandomPhoto(randomNumber);
    const { data } = await axios.get(apiPath);
    return data;
};

function App() {
    const [childIndex, setChildIndex] = React.useState(0);
    const [data, setData] = React.useState([]);
    const randomizeImages = () => {
        getRandomPhoto().then((randomPhotos) => {
            setData(randomPhotos);
        });
    };

    React.useEffect(() => {
        randomizeImages();
    }, []);

    const nextImage = () => {
        if (childIndex >= data.length - 1) return;
        const value =
            document.getElementById('carousel-main').children[childIndex]
                .clientWidth;
        document
            .getElementById('carousel-main')
            .scrollBy({ left: value, behavior: 'smooth' });
        setChildIndex(childIndex + 1);
    };

    const prevImage = () => {
        if (childIndex <= 1) return;
        const value =
            document.getElementById('carousel-main').children[childIndex - 1]
                .clientWidth;
        document
            .getElementById('carousel-main')
            .scrollBy({ left: -value, behavior: 'smooth' });
        setChildIndex(childIndex - 1);
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Gallery</h1>
                <button onClick={randomizeImages}>
                    Shuffle&nbsp;
                    <img src={shuffleIcon} alt="shuffle-icon" />
                </button>
            </div>
            <Carousel data={data} />
            <div className="images-scroll">
                <button onClick={prevImage}>
                    <img src={angleLeft} className="color-filter" alt="" />
                </button>
                <button onClick={nextImage}>
                    <img src={angleRight} className="color-filter" alt="" />
                </button>
            </div>
        </div>
    );
}

export default App;
