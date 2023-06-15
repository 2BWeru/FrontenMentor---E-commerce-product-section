// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import productImage1 from "../assets/images/image-product-1.jpg";
import productImage2 from "../assets/images/image-product-2.jpg";
import productImage3 from "../assets/images/image-product-3.jpg";
import productImage4 from "../assets/images/image-product-4.jpg";
import Navbar from "./navbar";
import { useState } from "react";

const hero = () => {
    const [carousel,setCarousel] = useState(false);

    const openCarousel = ()=>{
        setCarousel(!carousel)
    }
    const closeCarousel = ()=>{
        setCarousel(carousel)
    }
  return (
  <>
  <Navbar />
    <div className='flex flex-col lg:flex-row space-x-6 mx-auto justify-center mt-8'>
        <div className="hidden lg:flex flex-col px-4 mt-8 space-y-4">
            <img className="w-[300px] rounded-xl" src={productImage1} alt="Image banner"/>
            <div className="flex flex-row justify-between space-x-6">
                <img onClick={openCarousel}  className="w-16 rounded-xl hover:border hover:border-4 hover:border-[#ff7d1a] hover:bg-opacity-50 hover:bg-[#70787d]" src={productImage1} />
                <img onClick={openCarousel} className="w-16 rounded-xl hover:border hover:border-4 hover:border-[#ff7d1a] hover:bg-opacity-50 hover:bg-[#70787d]" src={productImage2} />
                <img onClick={openCarousel}  className="w-16 rounded-xl hover:border hover:border-4 hover:border-[#ff7d1a] hover:bg-opacity-50 hover:bg-[#70787d]" src={productImage3} />
                <img onClick={openCarousel}  className="w-16 rounded-xl hover:border hover:border-4 hover:border-[#ff7d1a] hover:bg-opacity-50 hover:bg-[#70787d]" src={productImage4} />
            </div>
        </div>
        {/*Carousel */}
        <div className='block px-8 flex w-full mx-auto mt-10  lg:hidden'>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className=""
            >
                <SwiperSlide>
                    <img className='rounded-xl h-[300px] mx-auto relative' src={productImage1} alt="product Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl h-[300px] mx-auto relative' src={productImage2} alt="product Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl h-[300px] mx-auto' src={productImage3} alt="product Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl h-[300px] mx-auto' src={productImage4} alt="product Image" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='flex justify-center items-center mt-8 px-12 lg:w-1/2'>
            <div className="flex flex-col space-y-4">
            <p className="mx-0 text-sm font-md text-[#ff7d1a]">SNEAKER COMPANY</p>
            <p className="text-3xl font-bold">Fall Limited Edition Sneakers</p>
            <p className="text-[#b6bcc8]">These low-profile sneakers are your perfect
                 casual wear companion. Featuring a durable 
                 rubber outer sole, they’ll withstand everything 
                the weather can offer
            </p>
            <div className="flex flex-row justify-between px-4">
                <p className="font-bold text-xl">$125.00  <span className="ml-4 text-[#ff7d1a] bg-[#ffede0] rounded-md w-10 text-center">50%</span></p>
                
                <p className="text-[#68707d]">$250.00</p>
            </div>
            <div className="flex flex-row justify-between px-4 bg-[#f7f8fd] py-2">
                <p className="font-bold text-[#ff7d1a]">-</p>
                <p className="font-bold">3</p>
                <p className="font-bold text-[#ff7d1a]">+</p>
            </div>
            <button className="bg-[#ff7d1a] text-[#ffffff] rounded-md py-3">Add To Cart</button>
            </div>
        </div>
    </div>

 </>
  )
}

export default hero