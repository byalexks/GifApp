import React from 'react'

export const GifGridItem = ({ title, url}) => {
    return (
        <div className="d-flex m-2 ">
             <img className="animate__animated  animate__bounce animate__delay-2s	2s" src={url} alt={title} />
        </div>
    )
}
