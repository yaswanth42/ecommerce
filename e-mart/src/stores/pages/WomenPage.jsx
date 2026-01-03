import React from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
        <div className='pageSection'>
      {womanData.map((item)=>{
        return(
            <div>
                <Link to={`/women/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="womenImage" />
                </div>
                </Link>
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
