import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { furnitureData } from '../data/furniture.js'
const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
          {furnitureData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="furnitureImage" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
          })}
        </div>
    </>
  )
}

export default FurniturePage
