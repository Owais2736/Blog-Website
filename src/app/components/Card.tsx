import React from 'react'
import Button from './Button'
import Link from 'next/link'


function Card(props) {
  return (


    <div className="container card border-2 border-[#a78b8e] w-80 h-700 rounded-xl p-6 m-5 ">
      <div className=" h-48 ">
        <img className='rounded-xl' src={props.src} alt="" srcset="" />
      </div>
      <h1 className='mt-3 font-bold text-2xl'>{props.title}</h1>
      <p className='mt-3'>{props.description}</p>
      <Button title={"Learn More"} />
      
      

    </div>


  )
}

export default Card
