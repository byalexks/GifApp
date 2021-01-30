import React from 'react'

export const GifGridItem = ({ title, url}) => {
    return (
        <div className="d-flex m-2">
             <img src={url} alt={title} />
        </div>
    )
}
