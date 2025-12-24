import React from 'react'
import { speakerData } from '../data/speaker'
const Speaker = () => {
    const firstFiveImages = speakerData.slice(0, 5);
  return (
    <>
        <h2>Speakers</h2>
        <div className='proSection'>    
        {
        firstFiveImages.map((item, index)=>{
            return( 
            <div className='imgBox' key={index}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
            )
        })
        }
    </div>  
    </>
  )
}

export default Speaker
