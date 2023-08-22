import React from 'react'
import Place from './Place'
import FilterComp from './FilterComp'
import { useState } from 'react'
import { useOutletContext } from "react-router-dom";


const PlaceList = () => {

  const [Places, PlaceAttrbs] = useOutletContext()
  const selAttrbs = [PlaceAttrbs[0], PlaceAttrbs[1]]
  console.log(' in Placelist ', PlaceAttrbs)
  console.log(' in Placelist ', Places)

  const [selectedAttribs, setSelectedAttr] = useState(selAttrbs)


  
  const toggleAttrib = (toggleItem) =>{
    if(selectedAttribs.includes(toggleItem)){
      setSelectedAttr(selectedAttribs.filter((item) =>toggleItem !== item ))
    }
    else{
      setSelectedAttr([...selectedAttribs, toggleItem])
    }

  }

  return (
    <div className='col-span-6 bg-slate-200'>
      <FilterComp attribs={PlaceAttrbs} selAttribs={selectedAttribs} toggleAttrib={toggleAttrib}/>
      <h1>PlaceList</h1>
      {Places.map((item, index) => {
        console.log('place ', item)
        let excluded = selectedAttribs.every(selItem => {
          return item.attribs.includes(selItem)})
        if (excluded===true){
          return(<Place pobj={item} key={index}></Place>)
        }
       
      })}
    </div>
  )
}

export default PlaceList