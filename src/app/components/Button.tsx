import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='border-2 rounded-2xl text-[#2F0147] mt-2 w-40 h-11 border-[#2F0147] '>{props.title}</button>
    </div>
  )
}

export default Button
