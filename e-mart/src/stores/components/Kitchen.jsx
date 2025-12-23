import React from 'react'
import { kitchenData } from '../data/kitchen'
const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0, 5);
  return (
    <>
        <h2>Kitchen Appliances</h2>
        <div className='proSection'>    
        {
        firstFiveImages.map((item)=>{
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

export default Kitchen
