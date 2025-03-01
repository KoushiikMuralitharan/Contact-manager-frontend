import React from "react";
import backgroundImage from "../src/images/contact-management.png";
const Aboutus = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* About Container */}
      {/* <div className="absolute top-0 left-0 flex flex-col md:flex-row items-center justify-center w-full h-full z-10">
        <div className="bg-gray-300 shadow-lg p-8 rounded-lg max-w-md md:w-1/2 md:mr-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
          <p className="text-gray-800">
            Our website serves as a comprehensive contact management solution.
            With an intuitive interface, users can easily add, view, update, and
            delete contacts. The platform offers features such as sorting and
            filtering to efficiently manage contact information. Users can
            categorize contacts by type, such as email, phone, or social media,
            making it convenient to organize and access their network.
            Additionally, the website provides a user-friendly experience with
            responsive design, ensuring accessibility across various devices.
            Whether for personal or professional use, our contact manager
            simplifies the task of staying connected and organized.
          </p>
        </div> */}

<div className="absolute top-0 left-0 flex flex-col md:flex-row items-center justify-center w-full h-full z-10">
  <div className="bg-gray-300 shadow-lg p-8 rounded-lg max-w-md md:w-1/2 md:mr-8 backdrop-filter backdrop-blur-lg bg-opacity-50">
    <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
    <p className="text-gray-800">
      Our website serves as a comprehensive contact management solution. With
      an intuitive interface, users can easily add, view, update, and delete
      contacts. The platform offers features such as sorting and filtering to
      efficiently manage contact information. Users can categorize contacts
      by type, such as email, phone, or social media, making it convenient to
      organize and access their network. Additionally, the website provides a
      user-friendly experience with responsive design, ensuring accessibility
      across various devices. Whether for personal or professional use, our
      contact manager simplifies the task of staying connected and organized.
    </p>
  </div>


        {/* Image */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full absolute top-0 left-0 transform -rotate-6 bg-white opacity-50"></div>
            <div className="h-full w-full absolute top-0 right-0 transform rotate-6 bg-white opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
