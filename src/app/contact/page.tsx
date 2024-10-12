import React from 'react'
import Signup from '../components/Signup'

function page() {
  return (
    

<>
<h1 className='head text-4xl pt-3 m-3'>Contact Us Page </h1>
      <div className="parent flex w-full ">

        <div className='w-1/2'>
          <p className='p-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsa blanditiis suscipit nulla incidunt nostrum laudantium, ipsam, laborum esse, dolores dolore ex? Recusandae consequuntur soluta provident ratione hic, ullam eveniet dolorem. Atque porro quas autem veritatis recusandae corporis quia facilis, consequatur incidunt quasi! Sunt perferendis ab voluptatibus laboriosam velit? Earum excepturi dolorem porro accusantium voluptas iste distinctio enim vitae quas. Quisquam aliquid id ipsam quaerat magnam est quis nesciunt unde? Consectetur enim assumenda fuga pariatur. Optio ipsam velit dolorum doloremque minus fugit commodi molestiae quaerat blanditiis dolorem officiis corrupti soluta ex eveniet esse nihil qui, eos quibusdam, corporis quas dignissimos. Eaque cum cumque, repellat voluptates qui est dignissimos dolorem ipsa blanditiis sit quidem perspiciatis? Ipsum blanditiis nemo aspernatur, officiis quam quod, accusamus illo alias consequatur, velit explicabo at! Perspiciatis rerum voluptate accusantium, veniam minima quibusdam nam cupiditate ex commodi ipsa at illum quidem excepturi blanditiis eligendi, quas quo, animi quasi fugiat placeat quis accusamus debitis necessitatibus? In blanditiis, tempore delectus totam tempora obcaecati nesciunt velit expedita voluptatum provident, voluptas impedit eos. Quo perferendis ipsa quas, dicta facere aliquam soluta quidem nam sunt alias, iusto voluptatum id? Necessitatibus itaque dolor veniam odio! Veniam molestiae praesentium nesciunt officia, ipsa architecto ea quas dicta error perferendis laborum recusandae porro quo eveniet tempora.</p>
        </div>
        <div className='map w-1/2 p-10' >

        <iframe className='map rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.818958601084!2d67.03346627436387!3d24.835864146243267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d76b62c0955%3A0x3c43f79293603dd8!2sblogar!5e0!3m2!1sen!2s!4v1728648940625!5m2!1sen!2s" width="600" height="450" ></iframe>
        </div>

      </div>
<center>
      <h1 className='head text-4xl pt-3'>Contact Form</h1>
          <Signup />
          </center>
      </>
    
  )
}

export default page
