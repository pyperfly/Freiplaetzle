import React from 'react'
import { MdOutlineWaves, MdAttractions} from "react-icons/md";
import { GiHighGrass, GiBeech, GiSoccerBall, GiBodyBalance } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";

import "../test.css";

const IconBox = ({place}) => {
  return (
      <div className='flex flex-row bg-slate-700 p-3 text-lg space-x-3 rounded-md'>
          {place.attribs.map((item, index) => {
            switch(item){
              case 'water': 
                return <MdOutlineWaves size={40} color="blue"/>
              case 'natural': 
                return <GiBeech size={40} color="green"/>
              case 'leisure': 
                return <MdAttractions size={40} color="orange"/>
              case 'sport': 
                return <GiSoccerBall size={40} color="teal"/>
              case 'sunny': 
                return <ImSun size={40} color="orange"/>
              case 'youth': 
                return <GiBodyBalance size={40} color="pink"/>
              case 'education': 
                return <FaUniversity size={40} color="black"/>
              default:
                ""
              }
            }
          )}
    </div>


  
      )
}

export default IconBox