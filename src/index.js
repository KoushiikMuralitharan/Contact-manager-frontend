import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import AddContacts from './AddContacts';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Viewcontacts from './Viewcontacts';
import reportWebVitals from './reportWebVitals';
import UpdateContact from './UpdateContact';


const router = createBrowserRouter(

  createRoutesFromElements(
    
    <Route path='/' element={<Navbar/>}>
          <Route index element={<Login/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path= '/addcontact' element={<AddContacts/>}/>
          <Route path= '/viewcontacts' element={<Viewcontacts/>}/>
          <Route path='/updatecontact/:id' element={<UpdateContact/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
