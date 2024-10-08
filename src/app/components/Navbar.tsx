import React from 'react'
import Link from 'next/link'
import Button from './Button'

function Navbar() {
  return (
<div className='navbar'>


    <nav className='nav w-full '>

   
    <div className='container flex justify-between p-5 text-white w-full '>
        <div className='font-bold text-2xl pl-12 '>
            Blooger
        </div>
            <ul className='flex gap-12 p-2 text-lg font-bold'>
               <Link href='/'> <li>Home</li></Link>
               
                <Link href='/about'><li>About</li></Link>
                <Link href='/news'><li>All News</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/advertisement'><li>Advertisement</li></Link>
            </ul>
            
            
           
        
      
    </div>
    </nav>
    </div>
  )
}

export default Navbar
