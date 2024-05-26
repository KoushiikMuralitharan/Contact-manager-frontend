import React, { useState } from "react";
import { useCookies } from "react-cookie";
import BackgroundImage from "./images/contact-image.jpg";
const AddContacts = () => {
  
  const [name ,setName] =  useState();
  const [phoneno , setPhno] = useState();
  const [age , setAge] = useState();
  const [typeOfContact , setTypeOfContact] = useState();
  const [cookies] = useCookies(['token']);
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
 const  handleSubmit = async(e) =>{
  e.preventDefault();
 
  if (!name || !phoneno || !age || !typeOfContact) {
    setFormError("All fields are required.");
    return;
  }

  if (phoneno.length !== 10) {
    setPhoneError("Phone number must be exactly 10 digits.");
    return;
  }

  try{
    const loginResponse = await fetch(`${process.env.REACT_APP_API_KEY}/add-contact/${cookies.userID}`,{
      method:"POST",
      headers:{
        "Authorization":`Bearer ${cookies.token}`,
        "content-Type" :"application/json",
      },
      body: JSON.stringify({
        name: name,
        phoneno: phoneno,
        age: age,
        typeOfContact: typeOfContact
      }),
    })

    const response = await loginResponse.json();
    if(response.status === "failure"){
      alert(response.message);
    }else {
      // Clear form on successful submission
      setName("");
      setPhno("");
      setAge("");
      setTypeOfContact("");
      setFormError("");
      setPhoneError("");
      alert("Contact added successfully!");
    }
  }catch(error){
    console.log("API error");
  }
 }
 const handleNameChange = (e) => {
  setName(e.target.value);
 }

 const handlePhnoChange = (e) => {
  const value = e.target.value;
  const regex = /^[0-9\b]+$/; // Only allow digits

  if (value === '' || regex.test(value)) {
    if (value.length == 10) {
      setPhno(value);
      setPhoneError(''); // Clear any existing error
    } else {
      setPhoneError("Phone number cannot be more than 10 digits.");
    }
  } else {
    setPhoneError("Only numeric values are allowed.");
  }
 }

 const handleAgeChange = (e) => {
  setAge(e.target.value);
 }

 const handletypeOfContactChange = (e) => {
  setTypeOfContact(e.target.value);
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
        {/* Contact Form */}
        <div className="relative bg-white p-8 rounded-lg shadow-md mt-6 w-full max-w-md ">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit}>
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
                onChange={handleNameChange}
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
                onChange={handlePhnoChange}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
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
                
                onChange={handleAgeChange}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                typeOfContact
              </label>
              <input
                type="text"
                id="typeOfContact"
                name="typeOfContact"
                
                onChange={handletypeOfContactChange}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                Add Contact
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
  );
};

export default AddContacts;
