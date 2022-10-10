import React from 'react'
import '../styles/Error.scss'

const Error = ({ error }) => {
    console.log(error)
    return (
        <div className='error'>
            <h1>City not found!</h1>
            <h2>{error?.message}</h2>
        </div>
    )
}

export default Error