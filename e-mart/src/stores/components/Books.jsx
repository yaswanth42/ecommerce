import React from 'react'
import { booksData } from '../data/books'
const Books = () => {
    const firstFiveImages = booksData.slice(0, 5);
  return (
    <>
        <h2>Books</h2>
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

export default Books
