import React from 'react'
import { useState } from 'react'

import FilterComp from '../components/FilterComp'
import { useOutletContext } from "react-router-dom";

const NewPlace = () => {

  const [Places, PlaceAttrbs, addPlace] = useOutletContext()
  const [selectedAttribs, setSelectedAttr] = useState([])
  const [title, setSelectedTitle] = useState('')
  const [textfield, setTextfield] = useState('')
  const [errors, setErrors] = useState({})

  const errorStyle = 'p-2 text-purple-100 font-bold bg-orange-900 border-red-700 border-4 rounded-md'
  const toggleAttrib = (toggleItem) =>{
    if(selectedAttribs.includes(toggleItem)){
      setSelectedAttr(selectedAttribs.filter((item) =>toggleItem !== item ))
    }
    else{
      setSelectedAttr([...selectedAttribs, toggleItem])
    }
  }

  const updateTitle = (e) =>{
    setSelectedTitle(e.target.value)
  }

  const updateTextfield = (e) =>{
    setTextfield(e.target.value)
  }

  const validateData = () => {
    let errorneous = false
    let errors = {}
    let error = ''

    if (!title){
        error = 'Title is required'
    }
    else if(title.length > 20){
        error = 'Title too long'
    }

    if (error !== '') {
      errors['title'] = error
      errorneous = true
    }

    error = ''
    if (!textfield){
      error = 'Description is required'
    }
    else if(textfield.length > 200){
        error = 'Description too long'
    }

    if (error !== '') {
      errors['textfield'] = error
      errorneous = true
    }


    return [errors, errorneous]
  }

  const handleSubmit = () =>{
    console.log('handle Submit')
    const [errors, errorneous] = validateData()
    if (errors['title']){
      console.log(errors['title'])
    }
    setErrors(errors)
    if (errorneous === false){
      console.log(' no errors ', title)
      const name = title
      const descr = textfield 
      const attribs = selectedAttribs

      addPlace({name, descr, attribs})
    }
  }

  const labelCSS ="mb-1 block text-lg font-medium text-gray-100"
  const inputBoxCSS ="my-2 p-5 bg-slate-600 border-teal-200 border-4 rounded-md focus:ring focus:ring-primary-200"
  return (
    <div className='col-span-6 flex flex-col items-stretch'>
      <div className='m-3 text-2xl'>NewPlace</div>

      <p>{title}</p>
      <div className={inputBoxCSS}>
        {errors['title'] && <p className={errorStyle}>{errors['title']}</p>  }
        <label className={labelCSS}>TITLE</label>
        <input className='p-2 my-2 bg-slate-50 text-orange-900 border-teal-300 rounded' onChange={updateTitle}></input>
      </div>
      
      <div className={inputBoxCSS}>
        <label className={labelCSS}>ATTRIBUTES</label>
        <FilterComp attribs={PlaceAttrbs} selAttribs={selectedAttribs} toggleAttrib={toggleAttrib}/>
        <div className='flex'>
          <p>Selected: </p>
          {selectedAttribs.map((attrib, index) => (<div>&nbsp;<span>{attrib.toUpperCase() + ','}</span></div>))}
        </div>
      </div>

      <div className={inputBoxCSS}>
        {errors['textfield'] && <p className={errorStyle}>{errors['textfield']}</p>  }
          <label className={labelCSS}>DESCRIPTION</label>
          <textarea className="bg-slate-50 text-orange-900" rows="6" cols="90" onChange={updateTextfield}></textarea>
      </div>

      <button className='my-2 p-5 text-lg font-bold bg-teal-600 border-teal-200 border-4 rounded-md' onClick={handleSubmit}>Submit</button>
  
    </div>
    
  )
}

export default NewPlace