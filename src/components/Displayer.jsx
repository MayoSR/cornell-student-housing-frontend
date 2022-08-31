import React from 'react'
import { useSelector } from 'react-redux'


export default function Displayer() {

    const storeValueRes = useSelector(state => state.storeValue)

    return (
        <div className='text-5xl mb-4'>{storeValueRes}</div>
    )
}
