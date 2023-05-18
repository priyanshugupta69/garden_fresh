import React, { useState } from 'react';
import axios from 'axios';


function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [serverResponse, setServerResponse] = useState("");

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
    if (!selectedFile) {
      setServerResponse("Please select an image")
      return
    }
    console.log(selectedFile)
    const data = {
      "image": selectedFile,
      "name": ProductName,
      "price": ProductPrice,
      "description": ProductDescription,
      "type": ProductCategory
    }
    if (!ProductName || !ProductPrice || !ProductDescription) {
      setServerResponse("Please fill all the fields")
      return
    }
    axios.post('/upload', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }

    })
      .then((response) => {
        console.log(response);
        setServerResponse(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-12">
      <form onSubmit={handleSubmit}>
        <input className='m-2' type="file" onChange={handleFileChange} />
        <br />
        <input className='m-2' type="text" name="ProductName" value={ProductName} placeholder="Product Name" onChange={(e) => {
          setProductName(e.target.value)
        }} />
        <br />
        <input className='m-2' type="text" placeholder="Product Price" name="ProductPrice" value={ProductPrice} onChange={(e) => {
          setProductPrice(e.target.value)
        }} />
        <br />
        <input className='m-2' type="text" placeholder="Product Description" name="ProductDescription" val={ProductDescription} onChange={(e) => {
          setProductDescription(e.target.value)
        }} />
        <br />
        <input className='m-2' type="text" placeholder="Product Category" name="ProductCategory" val={ProductCategory} onChange={(e) => {
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


export default ImageUpload;