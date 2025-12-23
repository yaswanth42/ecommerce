import React from 'react'
import { menData } from '../data/men' 
const Men = () => {
    const firstFiveImages = menData.slice(0, 5);
  return (
    <>
        <h2>Men's Fashion</h2>
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

export default Men
