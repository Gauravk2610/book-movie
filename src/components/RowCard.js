import React from 'react'

function RowCard({img, title, vote}) {
    return (
        <div className='relative w-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out'>
            <img className='relative min-w-[180px] min-h-[260px] sm:min-w-[220px] w-full sm:min-h-[300px] max-h-[500px] object-cover' src={img} alt={title} />
            <div className='absolute bottom-0 px-3 py-2 w-full fadeBottom'>
                <h3>{title}</h3>
                <div>⭐ {vote}</div>
            </div> 
        </div>
    )
}

export default RowCard