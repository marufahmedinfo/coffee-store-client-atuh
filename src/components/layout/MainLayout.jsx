import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;