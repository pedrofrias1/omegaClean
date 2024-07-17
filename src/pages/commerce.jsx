// import { Loading } from "@nextui-org/react";
import React, { useState } from 'react';
import ReactLoading from 'react-loading';

function Comerce() {

    const [color,setColor]= useState('black')
    return (

        <div className='w-100 loading flex justify-center align-center pt-24'>
            <h1 className="">Proximamente...</h1>
            <div className='color' >
                <ReactLoading width={375}  height={667}  color={color} />
            </div>

        </div>


    )
}
export default Comerce;