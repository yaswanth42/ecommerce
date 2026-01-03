import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { furnitureData } from '../data/furniture.js'
import { Link } from 'react-router-dom'
const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
          {furnitureData.map((item)=>{
            return(
                <div>
                   <Link to={`/furnitures/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="furnitureImage" />
                    </div>
                   </Link>
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
