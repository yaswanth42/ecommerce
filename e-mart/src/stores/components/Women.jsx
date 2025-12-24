import React from 'react'
import { womenData } from '../data/women'
const Women = () => {
    const firstFiveImages = womenData.slice(0, 5);
  return (
    <>
        <h2>Women Products</h2>
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

export default Women
