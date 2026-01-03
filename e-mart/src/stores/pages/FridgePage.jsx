import React from 'react'
import Navbar from '../components/Navbar'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
          {fridgeData.map((item)=>{
            return(
                <div>
                    <Link to={`/fridge/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="fridgeImage" />
                        </div>
                    </Link>
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

export default FridgePage
