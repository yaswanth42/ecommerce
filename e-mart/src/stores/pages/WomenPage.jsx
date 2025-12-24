import React from 'react'
import Navbar from '../components/Navbar'
import { womenData } from '../data/women'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
        <div className='pageSection'>
      {womenData.map((item)=>{
        return(
            <div>
                <div className="pageImg">
                    <img src={item.image} alt="womenImage" />
                </div>
                <div className="proModel">
                    {item.brand}, {item.product}
                </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default WomenPage
