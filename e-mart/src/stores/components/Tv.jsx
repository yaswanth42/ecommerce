import React from 'react'
import { tvData } from '../data/tv'
const Tv = () => {
    const firstFiveImages = tvData.slice(0, 5);
  return (
    <>
        <h2>Televisions</h2>
        <div className='proSection'>    
        {
        firstFiveImages.map((item)=>{
          return(
            <div className='imgBox' key={item.id}>          
                <img className="proImage" src={item.image} alt={item.product} />
            </div>
          )
        }       )
        }
    </div>  
    </>
  )
}

export default Tv
