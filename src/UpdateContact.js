import React, { useEffect, useState } from 'react'
import BackgroundImage from './images/login-image.webp'
import { useNavigate, useParams } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from 'axios'

const UpdateContact = () => {
  const {id} = useParams();
  const [contact, setContact] = useState([]);
  const [name,setName] = useState("");
  const [phoneno, setPhno] = useState("");
  const [age , setAge] = useState("");
  const [typeOfContact, setTypeOfContact] = useState("");
  const [cookies] = useCookies(['token']);

  const navigate = useNavigate();
  console.log(id);

   const getSingleExpense = () =>{
    fetch(`${process.env.REACT_APP_API_KEY}/gettingcontact/${id}`,{
      method:"GET",
      headers:{
        "Authorization":`Bearer ${cookies.token}`,
        "content-Type" :"application/json",
      }
    })
    .then((res)=> res.json())
      .then((data) => {
          setContact(data)
          setName(data.name);
          setPhno(data.phoneno);
          setAge(data.age);
          setTypeOfContact(data.typeOfContact);
      })
      .catch((err)=> console.log(err));
   }
   useEffect(()=>{
    getSingleExpense();
   },[]);


  const Update = (e) =>{
    e.preventDefault()
   fetch(`${process.env.REACT_APP_API_KEY}/update-contact/${id}`,{
    method:'PATCH',
    headers:{
      "Authorization":`Bearer ${cookies.token}`,
      "content-Type" :"application/json",
    },
    body: JSON.stringify({
      name: name,
      phoneno : phoneno,
      age : age,
      typeOfContact : typeOfContact
     })
   }).then((res)=>{
   })

   navigate('/viewcontacts');
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BackgroundImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Update Contact Form */}
        <div className="relative bg-white p-8 rounded-lg shadow-md mt-6 w-full max-w-md ">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Update Contact
          </h2>
          <form onSubmit={Update}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneno"
                name="phoneno"
                value={phoneno}
                onChange={ (e) => setPhno(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={age}
                onChange={(e)=> setAge(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="typeOfContact"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Contact
              </label>
              <input
                type="text"
                id="typeOfContact"
                name="typeOfContact"
                value={typeOfContact}
                onChange={(e) => setTypeOfContact(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                Update Contact
              </button>
            </div>
          </form>
        </div>

        {/* Container to display text */}
        <div className="relative bg-white p-8 rounded-lg shadow-md max-w-sm ml-4 backdrop-filter backdrop-blur-lg bg-opacity-50">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact List</h2>
          <p className="text-gray-700">
            One small benefit of storing contacts using our website is the ease
            of access and organization. By centralizing contact information in
            one place, users can quickly retrieve and manage their contacts
            without having to search through multiple platforms or devices.
            Additionally, our platform offers features such as sorting and
            filtering, allowing users to categorize contacts by type, group them
            for easy reference, and efficiently manage their network. This
            streamlined approach saves time and effort, ultimately enhancing
            productivity and facilitating seamless communication with contacts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UpdateContact