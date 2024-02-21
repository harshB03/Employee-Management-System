import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function UpdateEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee,setEmployee] = useState({
        id:id,
        firstName: "",
        lastName: "",
        email: "",
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value});
        // console.log(value)
        // console.log(employee.id)
    }
    useEffect = (() => {
        const fetchData = async() => {
            try{
                // console.log(employee.id)
                const response = await axios.get(`http://localhost:8080/api/v1/employee/${id}`)
                console.log(response.data)
                setEmployee(response.data)
            } catch (err) {
                console.log(err)
            }
        };
        if(id)
            fetchData();
    },[id]);
    // const {firstName, lastName   ,email} = employee

    const handleUpdate = () =>{
        // e.preventDefault();
        // await axios.put(`http://localhost:8080/v1/employee/${id}`,employee).then((response)=>{
            navigate("/")
        // })
        // navigate('/')
    }

  return (
    <div className='max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className=' font thin text-2xl'>
                <h1>Update Employee Details</h1>
            </div>
            <div className='h-14 w-full my-4'>
                <label className='= text-gray-600 text-sm font-normal'> First Name: </label>
                <input onChange={(e) => handleChange(e)} name='firstName' value={employee.firstName} type = 'text' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-left justify-left h-14 w-full my-4'>
                <label className='text-gray-600 text-sm font-normal'> Last Name: </label>
                <input onChange={(e) => handleChange(e)} name='lastName' value={employee.lastName} type = 'text' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className=' text-gray-600 text-sm font-normal'> E-mail: </label>
                <input onChange={(e) => handleChange(e)} name='email' value={employee.email} type = 'email' className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={handleUpdate} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>
                    Update
                </button>
                <button onClick={(e)=>navigate("/employees")} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}
