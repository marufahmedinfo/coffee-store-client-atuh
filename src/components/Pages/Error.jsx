import React from 'react';
import error from '../../assets/images/404/404.gif'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <img src={error} alt="" />
            <Link to={'/'}>
                <button className='flex items-center text-3xl bg-[#331A15] text-white p-4 rounded-2xl'><GoArrowLeft /> Back to home</button>
            </Link>
        </div>
    );
};

export default Error;