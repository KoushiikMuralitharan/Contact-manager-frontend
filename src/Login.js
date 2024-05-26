import { useState } from 'react';
import backgroundImage from './images/login-image.webp';
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import "./Login.css";
function Login() {
 const [email , setEmail] = useState();
 const [password, setPassword] = useState();
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const [,setCookie] = useCookies([])


 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try{
    const loginResponse = await fetch(`${process.env.REACT_APP_API_KEY}/validateUser`,{
      method:"POST",
      headers:{
        "content-Type" :"application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })

    const loginData = await loginResponse.json();
    setLoading(false);

      if(loginData.status === "failure"){
        alert(loginData.message)
      }else{
          console.log(loginData);
          setCookie('token', loginData.accessToken, { maxAge: 60 * 60 * 60 })
          setCookie('userID', loginData.userDetail.userID, { maxAge: 60 * 60 * 60 })
          navigate("/addcontact")
      }
  }catch(error){
    console.log("API error");
  }
 }

 const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    {/* Image */}
    <div className="md:w-1/2">
      {/* <img src={backgroundImage} alt="Background" className="h-full w-full object-cover" /> */}
      <img src={backgroundImage} alt="Background" className="h-auto md:h-full w-full md:w-auto object-cover rounded-lg" />
    </div>
    
    {/* Login Container */}
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md md:w-1/2 md:ml-8">
    {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="loader"></div>
          </div>
        )}
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="text" id="email" value={email} name="username" onChange={handleEmailChange} className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" value={password} name="password" onChange={handlePasswordChange} className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-indigo-500 hover:text-indigo-600">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
