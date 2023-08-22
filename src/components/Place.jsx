import React from 'react'
import IconBox from './IconBox'


const Place = ({pobj}) => {



  const handleRemove = () =>{
    removePlace()
  }

  

  return (
    <div className='flex flex justify-between gap-3 bg-teal-800 mx-2 my-3 p-3 rounded-lg'>
      <div className='flex-1 flex-col'> 
        <p className='p-3 text-lg'>{pobj.name}</p>
        <p>{pobj.descr}</p>
        <div className='flexhacker'>
        <IconBox place={pobj}/>
        </div>
        
      </div>
       <div className="basis-1/8 p-3">
          <button className='bg-red-800 p-3 rounded-md hover:font-semibold ' onClick={handleRemove}>Delete</button>
        
       </div>
        
  </div>
  )
}

export default Place