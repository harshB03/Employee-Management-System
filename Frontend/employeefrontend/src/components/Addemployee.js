import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Addemployee() {
    let navigate = useNavigate()
    const [details,userDetails] = useState({
        id:"",
        firstName: "",
        lastName: "",
        email: "",
    });

    const {firstName, lastName,email} = details
    const handleChange = (e) => {
        const value = e.target.value;
        userDetails({...details,[e.target.name]: value});

    }
    const handleSubmit = async(e) => {
        e.preventDefault(); //disable refreshing of page
        await axios.post('http://localhost:8080/api/v1/addEmployee',details)
        navigate('/')

    }

    const handleClear = (e) => {
        e.preventDefault();
        userDetails({
            firstName: "",
            lastName: "",
            email: "",
        })
    }

  return (
    <div className='max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className=' font thin text-2xl'>
                <h1>Add New Employee</h1>
            </div>
            <div className='h-14 w-full my-4'>
                <label className='= text-gray-600 text-sm font-normal'> First Name: </label>
                <input onChange={(e) => handleChange(e)} name='firstName' value={firstName} type = 'text' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-left justify-left h-14 w-full my-4'>
                <label className='text-gray-600 text-sm font-normal'> Last Name: </label>
                <input onChange={(e) => handleChange(e)} name='lastName' value={lastName} type = 'text' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className=' text-gray-600 text-sm font-normal'> E-mail:         </label>
                <input onChange={(e) => handleChange(e)} name='email' value={email} type = 'email' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={(e)=> handleSubmit(e)} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>
                    Save
                </button>
                <button onClick={handleClear} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

