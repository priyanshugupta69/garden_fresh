import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { set } from "store";
export default function ProductUpdate() {
  const [ProductArray, setProductArray] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  useEffect( () => {
    const data = localStorage.getItem("ProductArray");
    if(data){
        setProductArray(JSON.parse(data))
       
    }
    
    

  } , [])
  useEffect(() => {
    if(ProductArray.length > 0){
        console.log(ProductArray);
        setProductDescription(ProductArray[0].description);
        setProductName(ProductArray[0].name);
        setProductPrice(ProductArray[0].price);
        setProductCategory(ProductArray[0].type);
        setSelectedFile(ProductArray[0].image);
        localStorage.removeItem("ProductArray");


    }
   
  }, [ProductArray]);
    const handleFileChange = (event) => {
        setServerResponse("")
        const data = new FileReader()
        data.addEventListener("load", function () {
          setSelectedFile(data.result)
        })
        data.readAsDataURL(event.target.files[0])
        console.log(selectedFile)
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!selectedFile){
            setServerResponse("Please select an image")
            return
        }
        if(!ProductName || !ProductPrice || !ProductDescription){
            setServerResponse("Please fill all the fields")
            return
        }
        const data = {
            "image": selectedFile,
            "name": ProductName,
            "price": ProductPrice,
            "description": ProductDescription,
            "type": ProductCategory
        }
        const patch = async() =>{
            try{
                const res = await axios.patch(`/update/${ProductArray[0]._id}`,data)
                console.log(res);
                setServerResponse(res.data);

            }catch(err){
                console.log(err);
            }
        }
        patch();
    };
    return (
        <div className="p-12">
        <form onSubmit={handleSubmit}>
          <input className='m-2' type="file" onChange={handleFileChange}  />
          <br />
          <input className='m-2' type="text" name="ProductName" value={ProductName} placeholder="Product Name" onChange={(e) => {
            setServerResponse("")
            setProductName(e.target.value)
          }} />
          <br />
          <input className='m-2' type="text" placeholder="Product Price" name="ProductPrice" value={ProductPrice} onChange={(e) => {
            setServerResponse("")
            setProductPrice(e.target.value)
          }} />
          <br />
          <input className='m-2' type="text" placeholder="Product Description" name="ProductDescription" value={ProductDescription} onChange={(e) => {
            setServerResponse("")
            setProductDescription(e.target.value)
          }} />
          <br />
          <input className='m-2' type="text" placeholder="Product Category" name="ProductCategory" value={ProductCategory} onChange={(e) => {
            setServerResponse("")
            setProductCategory(e.target.value)
          }} />
          <br />
          <button className='rounded-lg bg-black text-white p-2 m-2' type="submit">Upload</button>
        </form>
        <div className="">
          <p>{serverResponse}</p>
        </div>
        <div>
        {selectedFile && <img src={selectedFile} height="300" width="500" alt="Selected File" />}
      </div>
  
      </div>

    );
}