import React from 'react';
import i1 from '../../assets/images/cups/Rectangle 10.png'
import i2 from '../../assets/images/cups/Rectangle 11.png'
import i3 from '../../assets/images/cups/Rectangle 12.png'
import i4 from '../../assets/images/cups/Rectangle 13.png'
import i5 from '../../assets/images/cups/Rectangle 14.png'
import i6 from '../../assets/images/cups/Rectangle 15.png'
import i7 from '../../assets/images/cups/Rectangle 16.png'
import i8 from '../../assets/images/cups/Rectangle 9.png'

const Flower = () => {
    return (
        <div className='md:my-10'>
            <div className='text-center items-center'>
                <p>Follow Us Now</p>
                <h1 className='text-3xl font-semibold text-[#331A15]'>Follow on Instagram</h1>
            </div>

            <div className='grid md:grid-cols-4'>
                <img src={i1} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i2} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i3} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i4} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i5} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i6} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i7} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
                <img src={i8} className='w-full p-7 md:h-56 mb-3 rounded-[40px] object-cover md:w-96' alt="" />
            </div>
        </div>
    );
};

export default Flower;