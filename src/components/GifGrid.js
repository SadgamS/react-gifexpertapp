import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    // useEffect( () =>{
    //     getGifs(category).then(setImages)
    // }, [category])
 
    const {data: images,loading} =  useFetchGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p className='animate__animated animate__fadeOutDown'>Loading...</p> }
        <div className='card-grid'>
            { 
            images.map( img => (
                 <GifGridItem 
                    key= {img.id}
                    {...img}
                 />
            ))
            }

        </div>
        </>
    )
}
