import React from 'react'
import { watchData } from '../data/watch'   
const Watch = () => {
    const firstFiveImages = watchData.slice(0, 5);
  return (
    <>
        <h2>Watches</h2>
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

export default Watch
