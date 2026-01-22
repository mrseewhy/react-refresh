import React, { useState } from 'react'

const Users = () => {

    const initialData = {
        name: '',
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState(initialData)
    const [users, setUsers] = useState([{ name: "my name", email: "my email", password: "my password" }])


    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prev => [...prev, formData])
        setFormData(initialData)
        setErrors(initialData)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    return (
        <div className='h-screen w-full grid place-items-center'>

            <div className='w-[60vw] h-full bg-red-50 grid place-items-center'>
                <div className=' px-8 pt-8'>
                    {users.length < 1 ? <p>No users</p> :
                        users.map((user, index) => {
                            return (
                                <p key={index}>{index + 1}: name: {user.name}, email: {user.email}, password: {user.password}</p>
                            )
                        })}
                </div>
                <div className='p-12 w-full'>
                    <form onSubmit={handleSubmit} action="" className='w-full grid gap-4'>
                        <div className='w-full flex gap-4 items-start justify-center'>
                            <label className='w-1/8 mt-3' htmlFor="name">Name</label>
                            <div className='w-7/8'>
                                <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" className='p-2 rounded-xl border border-gray-300 w-full' />
                                <span className='text-red-500 text-sm'>{errors.name}</span>
                            </div>
                        </div>
                        <div className='w-full flex gap-4 items-start justify-center'>
                            <label className='w-1/8 mt-3' htmlFor="email">Email</label>
                            <div className='w-7/8'>
                                <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" className='p-2 rounded-xl border border-gray-300 w-full' />
                                <span className='text-red-500 text-sm'>{errors.email}</span>
                            </div>
                        </div>
                        <div className='w-full flex gap-4 items-start justify-center'>
                            <label className='w-1/8 mt-3' htmlFor="password">Password</label>
                            <div className='w-7/8'>
                                <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" className='p-2 rounded-xl border border-gray-300 w-full' />
                                <span className='text-red-500 text-sm'>{errors.password}</span>
                            </div>
                        </div>
                        <button type="submit" className=' w-7/8 self-end ml-auto bg-red-600 text-white p-2 rounded-xl hover:bg-red-500 transition-all duration-300 hover:scale-105'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Users    