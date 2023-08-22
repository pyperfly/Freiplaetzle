import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='col-span-2 flex flex-col gap-2 p-3'>
        <Link to="/create" className="text-white bg-gradient-to-b from-teal-600 to-teal-800 hover:from-teal-600 hover:to-teal-400 font-bold rounded-lg px-3 py-5">Add Place</Link>
        <Link to="/" className="text-white bg-gradient-to-b from-cyan-600 to-cyan-800 hover:from-cyan-600 hover:to-cyan-400 font-bold rounded-lg px-3 py-5">To Placelist</Link>
    </div>
  )
}

export default Navigation