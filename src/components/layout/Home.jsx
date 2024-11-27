import React, { useState } from 'react';
import Banner from '../Pages/Banner';
import Flower from '../Pages/Flower';
import CardTop from '../Pages/CardTop';
import Card from '../Pages/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div>
            <Banner></Banner>
            <CardTop></CardTop>
            <div className='py-8 m-20'>
                <div className='text-center mb-12 items-center text-xl'>
                    <p className='text-2xl'>--- Sip & Savor ---</p>
                    <h1 className='text-3xl text-[#331A15] font-semibold'>Our Popular Products</h1>
                    <Link to={'/addcoffe'}>
                        <button className='bg-[#E3B577] px-5 py-2 text-lg rounded-xl'>Add Coffee </button>
                    </Link>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        coffees.map(coffee => <Card 
                            key={coffee._id}
                             coffee={coffee}
                             coffees={coffees}
                             setCoffees={setCoffees}

                             ></Card>)
                    }
                </div>
            </div>
            <Flower></Flower>
        </div>
    );
};

export default Home;