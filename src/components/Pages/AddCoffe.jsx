import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffe = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const from = e.target;

        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // send data to the server
        fetch('https://coffee-store-server-phi-lac.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    from.reset();
                }
            })
    }
    return (
        <div className='py-10'>
            <Link to={'/'}>
                <button className='flex items-center text-2xl p-4 rounded-2xl'><GoArrowLeft /> Back to home</button>
            </Link>

            <div className='card bg-[#F4F3F0] w-full shrink-0 shadow-2xl'>
                <div className='text-center md:w-9/12 mx-auto pt-10'>
                    <h1 className='text-center text-3xl font-semibold'>Add New Coffee</h1>
                    <p className='text-center text-gray-600 text-lg'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] text-[#331A15] text-xl">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffe;