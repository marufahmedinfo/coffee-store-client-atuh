import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router-dom';

const Vew = () => {
    const vewCoffees = useLoaderData();
    const {name, chef, supplier, taste, category, details, photo} = vewCoffees;
    return (
        <div className='py-10'>
            <Link to={'/'}>
                <button className='flex items-center text-2xl p-4 rounded-2xl'><GoArrowLeft /> Back to home</button>
            </Link>
            <div className='p-40 bg-[#F4F3F0] w-full shrink-0 shadow-2xl grid grid-cols-2 gap-60 items-center rounded-3xl'>
                <div>
                    <img className='h-96 rounded-3xl w-full' src={photo} alt="banner photo..." />
                </div>
                <div className='text-xl'>
                    <h2 className='text-4xl font-bold mb-5 text-[#331A15]'>Niceties</h2>
                    <p className='text-xl font-semibold'>Name: <span className='text-gray-500 ml-2'>{name}</span></p>
                    <p className='text-xl font-semibold'>Chef: <span className='text-gray-500 ml-2'>{chef}</span></p>
                    <p className='text-xl font-semibold'>Supplier: <span className='text-gray-500 ml-2'>{supplier}</span></p>
                    <p className='text-xl font-semibold'>Taste: <span className='text-gray-500 ml-2'>{taste}</span></p>
                    <p className='text-xl font-semibold'>Category: <span className='text-gray-500 ml-2'>{category}</span></p>
                    <p className='text-xl font-semibold'>Details: <span className='text-gray-500 ml-2'>{details}</span></p>
                    {/* Name:  Americano Coffee
                    Chef:  Mr. Matin Paul
                    Supplier:  Cappu Authorizer
                    Taste:  Sweet and hot
                    Category:  Americano
                    Details:  Espresso with hot water */}
                </div>
            </div>

        </div>
    );
};

export default Vew;