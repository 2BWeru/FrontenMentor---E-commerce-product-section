import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const carousel = () => {
    const slides=[
        "../../assets/images/image-product-1-thumbnail.jpg",
        "../../assets/images/image-product-2-thumbnail.jpg",
        "../../assets/images/image-product-3-thumbnail.jpg",
        "../../assets/images/image-product-4-thumbnail.jpg",
    ]
  return (
    <div className=''>
       <Carousel>
       {slides.map((s)=>{
            <img src={s} />
        })}
       </Carousel>
    </div>
  )
}

export default carousel