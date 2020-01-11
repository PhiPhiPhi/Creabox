import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div>

            <img 
            src={spinner}
            alt='loading..'
            style= {{display: 'block', margin:'auto', width: '200px'}}
            />

            
        </div>
    )
}
