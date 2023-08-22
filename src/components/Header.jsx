import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-3 bg-teal-900 h-40 text-yellow-50'>
        <p>Freiraum</p>
        <button className='text-3xl'> &#9776;</button>
    </div>
  )
}

export default Header