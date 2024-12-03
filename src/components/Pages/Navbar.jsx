import React from 'react';
import logoImg from '../../assets/images/more/logo1.png'
import bgimg from '../../assets/images/more/15.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header style={{ backgroundImage: `url(${bgimg})` }} className="bg-cover bg-center h-14 flex items-center justify-between text-white">
      <div></div>
      <div className="flex items-center justify-center gap-4">
        {/* Logo */}
        <img src={logoImg} alt="Espresso Logo" className="h-12" />
        {/* Title */}
        <h1 className="text-3xl font-semibold">Espresso Emporium</h1>
      </div>
      <div className='mr-7'>
        <Link to={'/signIn'}><button className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 md:px-9 px-5 md:text-xl rounded-lg shadow-md transition'>LogIn</button></Link>
      </div>
    </header>
  );
};

export default Navbar;