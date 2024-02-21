import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employee from './Employee'
export default function AllEmployees() {
    let navigate = useNavigate()
    const [employees, setEmployees] = useState(null)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try{
                const result = await axios.get('http://localhost:8080/api/v1/employees')
                setEmployees(result.data)
                // console.log(result)
            }catch(error){
                console.log(error)
            }
            setLoading(false)
        };
        fetchData();
    },[]);
    const deleteEmployee = async(e,id) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8080/api/v1/employee/${id}`).then((response)=>{
            if(employees){
                setEmployees((prevEmployee)=>{
                    return prevEmployee.filter((employee)=> employee.id!== id)
                })
            }
        })
        // navigate('/')
    }

  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button className='round bg-slate-600 text-white px-6 py-2 font-semibold' onClick={()=> navigate("/addEmployee")}>Add New Employee</button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr> 
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 '>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>E-mail</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-white'>
                        {employees.map((employee) => (
                            <Employee employee={employee} deleteEmployees = {deleteEmployee} key={employee.id}></Employee>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}
