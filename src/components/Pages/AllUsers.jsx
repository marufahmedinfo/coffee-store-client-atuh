import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Delete From to the DB

                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Delete is Done', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully Deleted Done.",
                                icon: "success"
                            });
                            const remainingUser = users.filter(user => user._id !== id);
                            setUsers(remainingUser);
                        }
                    })

            }
        });
    }
    return (
        <div>
            <Link to={'/'}>
                <button className='flex items-center text-3xl p-4 rounded-2xl font-extrabold'><GoArrowLeft /> Back to home</button>
            </Link>
            <h1 className='text-3xl font-bold'>Users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th className='text-xl font-bold text-black'>Name</th>
                            <th className='text-xl font-bold text-black'>Email</th>
                            <th className='text-xl font-bold text-black'>Created At</th>
                            <th className='text-xl font-bold text-black'>Last Login At</th>
                            <th className='text-xl font-bold text-black'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold md:text-2xl text-xl">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-xl'>
                                    {user.email}
                                </td>
                                <td>{user.createAt}</td>
                                <td className='md:text-xl'>{user.lastSignInTime}</td>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="p-3"><MdDelete size={30} color='red' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Email</th>
                            <th className='text-xl'>Created At</th>
                            <th className='text-xl'>Last Login At</th>
                            <th className='text-xl'>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;