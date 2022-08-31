import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementerAction, incrementerAction } from '../actions'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

export default function IncrementerDecrementer() {

    const dispatch = useDispatch()

    const incrementer = () => {
        dispatch(incrementerAction())
    }

    const decrementer = () => {
        dispatch(decrementerAction())
    }

    return (
        <div className='flex justify-between'>
            <button onClick={decrementer} className="border-2 border-rounded-sm p-2 mr-2 text-xl"><AiOutlineMinus /></button>
            <button onClick={incrementer} className="border-2 border-rounded-sm p-2 text-xl"><AiOutlinePlus /></button>
        </div>
    )
}
