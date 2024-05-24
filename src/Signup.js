import React, { useState } from 'react'
import backgroundImage from './images/contact-management.png';
import  axios from 'axios';
const Signup = () => {

  const [username , setUsername] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/addUser`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
       body: JSON.stringify({
        username : username,
        email : email,
        password : password
       }),
      })
      if(!response.ok){
        throw new Error("Failed to sign up");
      }
    }catch(error){
        console.log("API error",error.message)
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    {/* Image */}
    <div className="md:w-1/2">
      <img src={backgroundImage} alt="Background" className="h-auto md:h-full w-full md:w-auto object-cover rounded-lg transform rotate-[-5deg]" />
    </div>

    {/* Signup Container */}
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md md:w-1/2 md:ml-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Sign Up</button>
        </div>
      </form>
      <p className="text-center mt-4 text-gray-600">Already have an account? <a href="/login" className="text-indigo-500 hover:text-indigo-600">Login</a></p>
    </div>
  </div>
  )
}

export default Signup