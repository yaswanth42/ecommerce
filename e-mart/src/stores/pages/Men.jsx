import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
const Men = () => {
  return (
    <>
    <Navbar/>
        <div className='pageSection'>
      {menData.map((item)=>{
        return(
            <div>
                <div className="pageImg">
                    <img src={item.image} alt="menImage" />
                </div>
                <div className="proModel">
                    {item.brand},{item.model}
                </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Men
