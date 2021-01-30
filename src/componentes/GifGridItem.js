import React from 'react'

export const GifGridItem = ({ id, title, url}) => {
    console.log(id, title, url);
    return (
        <div className="d-flex">
            <div className="d-flex align-content-center flex-wrap w-50 p-3">
                
                <img src={url} alt={title} />
            </div>
        </div>
    )
}
