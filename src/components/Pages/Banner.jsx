import React from 'react';
import bannerIm from '../../assets/images/more/3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[600px] text-white"
            style={{
                backgroundImage: `url(${bannerIm})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Would you like a Cup of Delicious Coffee?
                </h2>
                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mb-6">
                    It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
                    nostalgia back! Your companion of every moment! Enjoy the beautiful
                    moments and make them memorable.
                </p>
                {/* Button */}
                <Link
                    to={'/users'}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition"
                >
                    AllUsers
                </Link>
            </div>
        </section>
    );
};

export default Banner;