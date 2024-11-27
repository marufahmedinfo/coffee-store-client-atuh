import React from 'react';
import logoImg from '../../assets/images/more/logo1.png'
import bgimg from '../../assets/images/more/15.jpg'

const Navbar = () => {
    return (
        <header style={{ backgroundImage: `url(${bgimg})` }} className="bg-cover bg-center h-14 flex items-center justify-center text-white">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img src={logoImg} alt="Espresso Logo" className="h-12" />
          {/* Title */}
          <h1 className="text-3xl font-semibold">Espresso Emporium</h1>
        </div>
      </header>
    );
};

export default Navbar;