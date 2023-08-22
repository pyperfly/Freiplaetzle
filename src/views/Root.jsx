import React, { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { fetchPlaces } from '../apis'


const Root = () => {

 
  const PlaceAttrbs = ['natural', 'education', 'sunny', 'leisure', 'sport', 'water', 'youth']

  

  const oldPlaces=[
    {name: 'Dreisam Lehen', descr: 'Die Dreisam verbindet die Innestadt mit der Peripherie', attribs: ['sunny', 'natural', 'youth', 'water']},
    {name: 'Botanischer Garten', descr: 'Erlebe die Welt der Pflanzen. Vom Mammutbaum zur Seerose', attribs: ['natural', 'garden', 'education']},
    {name: 'Dietenbach Park', descr: 'Wasser, Sport und SPiel in attraktivem Grün aus Wiesen, Bäumen und Wasser', attribs: ['natural', 'leisure', 'sport', 'water']}
  ]

  const [places, updatePlaces] = useState([])

  useEffect(() =>{

    const getPlaces = async () => {
      const placesLoaded = await fetchPlaces()
      console.log(' starting placelist ', placesLoaded)
      updatePlaces(placesLoaded)
      
    }
   
    
    getPlaces()
    
  },[])

  

  

  const removePlace = () =>{
    console.log('Im a function - removeePlace')
  }
  
  
  const newPlace = async (placeObj) =>{

    const addPlace = await fetch('http://localhost:5000/Places', 
    {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'},
      body: JSON.stringify(placeObj)
     
    }
    )
    
    const addedPlace = await addPlace.json()

    updatePlaces([...places, addedPlace])

    /*
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {}
    newTask.id = id
    newTask.name = placeObj.title
    newTask.descr = placeObj.textfield
    newTask.attribs = placeObj.selectedAttribs
    updatePlaces([...places, newTask])*/
  }


  const deletePlace = async(id) =>{

    const delUrl = `http://localhost:5000/Places/${id}`
    await fetch(delUrl, 
      {
        method: 'DELETE',
      }
      )
    updatePlaces(places.filter((place) => place.id !== id))
  }

  const removePlaceXX = (id) =>{
    updatePlaces(places.filter((place) => place.id !== id))
  }


  



  return (
    <div className="App h-screen">
      <Header/>
      <div className="h-full grid grid-cols-8 gap-3">
        <Navigation/>
        <Outlet context={[places, PlaceAttrbs, newPlace]}/>
      </div>
     
    </div>
  )
}

export default Root