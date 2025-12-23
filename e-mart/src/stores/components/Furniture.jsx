import React from 'react'
import { furnitureData } from '../data/furniture'
const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0, 5);
  return (
    <>
        <h2>Furniture</h2>
        <div className='proSection'>
      {     firstFiveImages.map((item)=>{                               
            return(
                <div className='imgBox' key={item.id}>
                    <img className="proImage" src={item.image} alt={item.product} />
                </div>
            )
        })
      }
    </div>          
    </>
  )
}

export default Furniture
