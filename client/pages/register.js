import React from 'react'

const Register = () => {
    return (
        <div className="container">
            <div className="w-1/2 mx-auto mt-12"> 
            <h2 className="text-5xl font-bold text-purple-600">Register</h2>
            <div className="bg-gray-100 p-8 rounded-lg mt-8">
            <form>
                <div className="my-4 w-full">
                    <label className="text-2xl text-gray-600">Name <span className="text-red-600">*</span></label><br/>
                    <input type="text" className=" mt-4 border-2 border-gray-200 rounded-lg w-full h-16 leading-10 text-2xl px-4"/>
                </div>
                <div className="my-4 w-full">
                    <label className="text-2xl text-gray-600">Email <span className="text-red-600">*</span></label><br/>
                    <input type="email" className=" mt-4 border-2 border-gray-200 rounded-lg w-full h-16 leading-10 text-2xl px-4"/>
                </div>
                <div className="my-4 w-full">
                    <label className="text-2xl text-gray-600">Password <span className="text-red-600">*</span></label><br/>
                    <input type="password" className=" mt-4 border-2 border-gray-200 rounded-lg w-full h-16 leading-10 text-2xl px-4"/>
                </div>
                <div className="my-4 w-full">
                    <button className="rounded-lg bg-purple-600 p-4 text-white text-2xl">Submit</button>
                </div>
                

            </form></div>
            </div>
        </div>
    )
}

export default Register
