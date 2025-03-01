
import React, { useState ,useEffect} from 'react';
import { useCookies } from "react-cookie";
import backgroundImage from './images/view-contact.jpg'
import { Link } from 'react-router-dom';

const Viewcontacts = () => {


    const [contact,setContacts] = useState([]);
    const [cookies] = useCookies(['token'])
     const getExpenses =() =>{
      
      fetch(`${process.env.REACT_APP_API_KEY}/get-contacts/${cookies.userID}`,{
        method:"GET",  
        headers:{
          'Authorization':`Bearer ${cookies.token}`,
          "content-Type" :"application/json",
        }
      })
      .then((res)=> res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log("Data received from API:", data);
          setContacts(data); // Assuming data is an array of contacts
        } else {
          console.error("Data received from API is not an array:", data);
        }
      })
      .catch((err)=> console.log(err));
     }

useEffect(()=>{
  getExpenses();
},[]);

console.log("Contact state:", contact);
    
    
const handleDelete = async (contactId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/delete-contact/${contactId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${cookies.token}`,
        "content-Type": "application/json",
      }
    });
    if (response.ok) {
      console.log("Contact deleted successfully");
      // After deleting the contact, you might want to refresh the contacts list
      getExpenses();
     } else {
      console.error("Failed to delete contact");
     }
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};

    
      return (
        <div className="min-h-screen bg-gray-100">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={backgroundImage} alt="Background" className="h-full w-full object-cover" />
          </div>
          <div className=" relative max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-semibold text-center mt-8 mb-8">Contact Management</h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(contact) && contact.map(contacts => (
                    <tr key={contacts._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{contacts.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{contacts.phoneno}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{contacts.age}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{contacts.typeOfContact}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/updatecontact/${contacts._id}`} className="text-indigo-600 hover:text-indigo-900">Update</Link>
                        <button className="text-red-600 hover:text-red-900 ml-2" onClick={() => handleDelete(contacts._id)}>Delete</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
}

export default Viewcontacts