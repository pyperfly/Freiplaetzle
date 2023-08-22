import React from 'react'
import { MdOutlineWaves, MdAttractions} from "react-icons/md";
import { GiHighGrass, GiBeech, GiSoccerBall, GiBodyBalance } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { FaUniversity } from "react-icons/fa"; 


const FilterComp = ({attribs, selAttribs, toggleAttrib}) => {
    const iconObj = {
        water: (<MdOutlineWaves size={40} color="blue"/>), 
        natural: (<GiBeech size={40} color="green"/>),
        leisure: (<MdAttractions size={40} color="orange"/>),
        sport: (<GiSoccerBall size={40} color="teal"/>),
        sunny: (<ImSun size={40} color="orange"/>),
        youth: (<GiBodyBalance size={40} color="pink"/>),
        education: (<FaUniversity size={40} color="black"/>)
   }

    return (    
   
    <div className="flex p-3 gap-3 bg-slate-500">
      

       
        {attribs.map((item, index) => {
            return (
                <div className={`p-3 pr-6 border-solid border-2 border-sky-500 rounded-md hover:bg-orange-100 ${selAttribs.includes(item) ? 'bg-cyan-50 shadow-lg border-orange-100 shadow-cyan-100/50' : 'bg-slate-400'}`}
                onClick={() => toggleAttrib(item)}>
                    {iconObj[item]} 
                </div>
                );
                    
            })}

    </div>

    
)}

export default FilterComp