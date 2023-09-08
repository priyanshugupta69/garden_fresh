import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import ProductCard from "./productCard";
function Update() {
  const [productName, setProductName] = useState("")
  const [serverResponse, setServerResponse] = useState([])
  useEffect(() => {
    if(serverResponse.length === 0){
      return
    }
    else{
      localStorage.setItem("ProductArray", JSON.stringify(serverResponse));

    }
    
    
    
  }, [serverResponse]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!productName) {
      setServerResponse(["Please enter a product name"])
      return
    }
    try {
      const res = await axios.post("/update", { "ProductName ": productName }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      
      )
      setServerResponse(res.data)

    }
    catch (error) {
      console.log(error)
      setServerResponse(error)

    }
  

  }
  return (
    <div className="p-12">
      <form onSubmit={handleSubmit}>
        <input className='m-2' type="text" name="ProductName" value={productName} placeholder="Product Name" onChange={(e) => {
          setProductName(e.target.value)
        }} />
        <button className='rounded-lg bg-black text-white p-2 m-2' type="Submit">Search</button>
      </form>
    <div className="flex flex-wrap m-4">
      {serverResponse.map((product) => (
        <div key={product._id} className="m-4">
        <a href={`./update/${product._id}`}>
          <ProductCard product={product} /> 
        </a>     
        </div>
      ))}

    </div>


    </div>

  )

}
export default Update;