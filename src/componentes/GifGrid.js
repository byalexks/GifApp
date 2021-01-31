import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({cater}) => {

    const {data:images, loading} = useFetchGifs(cater)


    return (
        <>
        <div className="d-block" style={{width: 100 + "vw"}}>
            <h1 >{cater}</h1> 
            <hr />

            {loading && <p className="animate__animated  animate__flash">loading</p> }
        </div>
                {
                   images.map(img => (
                     <GifGridItem
                     key={img.id}
                     {...img}
                     />
                   )) 
                } 
        </>
    )
}
