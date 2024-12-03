import React from 'react';
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const CardTop = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 bg-[#ECEAE4] p-4 rounded-b-2xl'>
            <div className='text-xl w-[270px]'> 
                <img src={icon1} alt="" />
                <h1 className='text-2xl font-semibold'>Awesome Aroma</h1>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='text-xl w-[270px]'> 
                <img src={icon2} alt="" />
                <h1 className='text-2xl font-semibold'>High Quality</h1>
                <p className='text-lg'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='text-xl w-[270px]'> 
                <img src={icon3} alt="" />
                <h1 className='text-2xl font-semibold'>Pure Grades</h1>
                <p className='text-lg'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='text-xl w-[270px]'> 
                <img src={icon4} alt="" />
                <h1 className='text-2xl font-semibold'>Proper Roasting</h1>
                <p className='text-lg'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default CardTop;