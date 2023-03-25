import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform authentication here
      const email = event.target.email.value;
      const password = event.target.password.value;
      const conpassword = event.target.conpassword.value;
        if(password !== conpassword){
            alert("passwords do not match")
        }
        else{
            var data =  {"email": email,
            "password": password,};
            try {
              const response = await axios.post('http://localhost:3001/signup',data , {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });
              console.log(response);
              alert(response.data)
            } catch (error) {
              console.log(error);
            }
        }
      
    

    
  };
  return (
    <div>
      <div className="h-screen flex items-center justify-center z-10">
      <form className="bg-white p-6 rounded-lg shadow-xl" onSubmit={handleSubmit} method = "post">
        <h2 className="text-lg font-medium mb-4">Signup</h2>
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
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Confirm Password
          </label>
          <input 
            className="border border-gray-400 p-2 w-full" 
            type="password" 
            id="conpassword" 
            name="conpassword" 
            value={conpassword}
            onChange={(e) => setConpassword(e.target.value)}
            required 
          />
        </div>
        <button type = "submit" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </div>
    
  );
};

