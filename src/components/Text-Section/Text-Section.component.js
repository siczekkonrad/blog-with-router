import React from 'react'

const TextSection = (props) => {
    return(
        <div className='text-section'>
            <p>{props.children}</p>
        </div>
    )
}

export default TextSection