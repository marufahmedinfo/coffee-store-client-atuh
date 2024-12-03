import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/more/1.png'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { SignInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const LogUser = { email, password }
        console.log(LogUser)

        SignInUser(email, password)
            .then(result => {
                console.log(result.user)
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://coffee-store-server-phi-lac.vercel.app/users/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('SignIn info Update Data in DB :', data)
                        if (data.modifiedCount) {
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
            <div className="card bg-base-100 w-full mx-auto mt-32 md:max-w-xl shrink-0 shadow-2xl">

                <h1 className="text-5xl font-bold ml-8 text-[#331A15]">Login now!</h1>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="email"
                            className="input input-bordered text-xl"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : "password"}
                            placeholder="password"
                            name='password'
                            className="input input-bordered text-xl"
                            required />
                        {/* <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[215px] right-9'>
                        {
                            showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                        }
                    </button> */}
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover text-xl">Forgot password?</Link>
                        </label>
                        {
                            error && <p className="text-red-500">{error.split("/")[1].slice(0, 18)}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#331A15] rounded-2xl p-3 text-2xl text-white">Login</button>
                    </div>
                </form>
                <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[230px] right-9'>
                    {
                        showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                    }
                </button>
                <button className='btn w-6/12 ml-8 text-xl'><FcGoogle size={30} />LogIn With Google</button>
                <p className="text-center font-semibold pb-7 mt-5 text-xl">
                    Allready Have An Account ?{'    '}
                    <Link to={'/signUp'} className="text-purple-500 underline">
                        SignUp Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;