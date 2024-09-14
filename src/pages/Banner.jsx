import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import pulseaiBanner from '../assets/pulse.png'
import buildaiBanner from '../assets/buildai-banner.png'
import neuralBanner from '../assets/byte-ad-banner.png'

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { img: buildaiBanner},
        { img: pulseaiBanner },
        { img: neuralBanner },
        { img: 'https://placehold.co/600x400/000000/FFFFFF/png?text= ' },
        { img: 'https://placehold.co/600x400/000000/FFFFFF/png?text= ' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box w='full' position="relative" >
            <Image w={'full'} h='32'
            objectFit={'cover'}
            objectPosition={'center'}
            rounded={'md'}
            src={images[currentIndex].img} 
            alt="Slider Image" />
            <Box display="flex" justifyContent="center" mt={4}>
                {images.map((_, index) => (
                    <Box
                        key={index}
                        bg={index === currentIndex ? 'gray.500' : 'gray.300'}
                        w={2}
                        h={2}
                        borderRadius="full"
                        mx={1}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Banner;