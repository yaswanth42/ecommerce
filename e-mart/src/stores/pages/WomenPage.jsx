import React from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
        <div className='pageSection'>
      {womanData.map((item)=>{
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
