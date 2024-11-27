import React from 'react';
import { Link } from 'react-router-dom';
import { CiRead } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const Card = ({ coffee, coffees, setCoffees }) => {
    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EA4744",
            cancelButtonColor: '#D2B48C',
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Our Coffee has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cofe => cofe._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        })
    }
    const { _id, name, chef, taste, photo } = coffee;
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p className='text-xl font-bold'>Name: {name}</p>
                    <p className='text-xl'>Chef: {chef}</p>
                    <p className='text-xl'>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <Link to={`/vewCoffee/${_id}`}>
                        <button className="join-item bg-[#D2B48C] p-3"><CiRead size={30} color='white' /></button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="join-item bg-[#3C393B] p-3"> <MdModeEditOutline size={30} color='white' /></button>
                    </Link>
                    <button
                        className="join-item bg-[#EA4744] p-3" onClick={() => handleDelete(_id)}><MdDelete size={30} color='white' /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;