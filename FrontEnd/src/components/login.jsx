import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform authentication here
      const email = event.target.email.value;
      const password = event.target.password.value;
      var data =  {"email": email,
      "password": password,};
      try {
        const response = await axios.post('http://localhost:3001/login',data , {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        console.log(response);
        if(response.data.message === "success"){
          localStorage.setItem("user",response.data.email);
          console.log("dfdfdfdf")
          window.location.href = "http://localhost:3000"
        }
        else{
          alert(response.data)
        }
      } catch (error) {
        console.log(error);
        alert("User Not Found")
        window.location.href = "http://localhost:3000/signup"
      }
    

    
  };

  return (
    <div> 
      <div className="h-screen flex items-center justify-center z-10">
      <form className="bg-white p-6 rounded-lg shadow-xl" onSubmit={handleSubmit} method = "post">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="border border-gray-400 p-2 w-full" 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={function(e) {
              setEmail(e.target.value)
            }
            }
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="border border-gray-400 p-2 w-full" 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type = "submit" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          Submit
        </button>
      </form>
      
    </div>
    <div className='flex items-center justify-center -my-44 '>
    <a href="http://localhost:3001/auth/google">
    <button className= "bg-red-400 hover:bg-red-500 text-white py-2 px-4 hover:border-transparent rounded"> Google</button>
  
    </a>
  

    </div>
    
    
    </div>
    
  );
};

