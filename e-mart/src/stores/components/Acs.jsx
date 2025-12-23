import React from 'react'
import { acData } from '../data/ac'
const Acs = () => {
  const firstFiveImages = acData.slice(0, 5);
  return (
    <>
        <h2>Air Conditioners</h2>
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

export default Acs
