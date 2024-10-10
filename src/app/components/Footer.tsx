import React from 'react'

function Footer() {
  return (
    <div className='footer rounded-md p-14'>
    
      <h1 className='font-bold text-xl pl-3 pt-3 '>About Us</h1>
      <p className='pl-3'>We are dedicated to providing the best services to our customers. Our team is committed to innovation and excellence in everything we do.We are dedicated to providing the best services to our customers. Our team is committed to innovation and excellence in everything we do.</p>
     

      <div className='foo flex justify-around pt-7'>

        <div>
        <h1  className='font-bold text-xl pl-3 pt-2'>Contact Us</h1>
      <pre>
        <p className='pl-3'>Email: owais2736@gmail.com
          <br />

          Phone: (+92)222910631
          <br />
          Address: Orangi Town, Karachi, Pakistan</p>
      </pre>
        </div>
        
        <div>
        <h1  className='font-bold text-xl pl-3 pt-2'>Legal</h1>
      <p className='pl-3'>© 2024 Owais Ali. All rights reserved. <br />
        Privacy Policy | Terms of Service</p>
        </div>
      </div>
     
     
    </div>
  )
}

export default Footer
