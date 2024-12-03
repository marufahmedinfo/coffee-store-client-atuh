import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/more/1.png'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { RegisterUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        const newUser = { name, photo, email, password }
        console.log(newUser)
        RegisterUser(email, password)
            .then(result => {
                console.log('User Created at FB', result.user)
                const createAt = result.user?.metadata?.creationTime;
                const DB_N_User = { name, photo, email, createAt }
                // server new user info to the database

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(DB_N_User)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('User Created To DB', data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'User Register Successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                            from.reset();
                        }
                    })

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    return (
        <div style={{
            backgroundImage: `url(${bgImg})`,
        }}>
            <Link to={'/'}>
                    <button className='flex items-center text-3xl p-4 rounded-2xl font-extrabold'><GoArrowLeft /> Back to home</button>
                </Link>

            <div className="card bg-base-100 w-full mx-auto mt-32 max-w-xl shrink-0 shadow-2xl">
                

                <h1 className="text-5xl font-bold ml-8 text-[#331A15]">Register now</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter Your Name"
                            className="input input-bordered text-xl"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Your Photo URL"
                            className="input input-bordered text-xl"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter Your Email"
                            className="input input-bordered text-xl"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : "password"}
                            placeholder="password"
                            name='password'
                            className="input input-bordered text-xl"
                            required />
                        {error && <p className="text-red-500">{error}</p>}

                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#331A15] rounded-2xl p-3 text-2xl text-white">Register</button>
                    </div>
                </form>
                <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[430px] right-10'>
                    {
                        showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                    }
                </button>


                <button className='btn w-6/12 ml-8'><FcGoogle size={30} />SignUp With Google</button>
                <p className="text-center font-semibold pb-7 mt-5 text-xl">
                    Allready Have An Account ?{'    '}
                    <Link to={'/SignIn'} className="text-purple-500 underline">
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;