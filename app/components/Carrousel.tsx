"use client";

import { useState, useEffect } from 'react';
import { Buscador } from './Buscador';

export function Carrousel() {

    const slides = [
        {url: "https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {url: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {url: "https://images.unsplash.com/photo-1570909776719-186852c5ea6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {url: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {url: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {url: "https://images.unsplash.com/photo-1566670735914-b2038696981d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }

    useEffect(() => {

        const autoplay = setInterval(() => {
            nextSlide();
        //Aqui se puede cambiar el tiempo de cambio de imagen
        }, 2500);
        
        return () => clearInterval(autoplay);
    
    }, [currentIndex]);

    return(
        <div className='w-full h-[400px] m-auto relative group'>
            
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'>
                {/*Pantalla negra que se usa para la opacidad de la imagenes*/}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
            </div>

            <Buscador />

        </div>
    )
}