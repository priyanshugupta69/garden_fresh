import React from 'react';
import {useState , useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductDelete = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const openModal = () => {
        setIsOpen(true);
      };
      
      const closeModal = () => {
        setIsOpen(false);
      };
        const handleclose = () => { 
            closeModal();
            navigate('/admin/delete');
          }
            const handledel = async() => {
                  try{
                    const data = JSON.parse(localStorage.getItem('ProductId'));
                    const res = await axios.delete(`/admin/delete/${data}`,{
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                    })
                    localStorage.removeItem('ProductId');
                    console.log(res.data);
                    navigate('/admin/delete');
                  }catch(error){
                    console.log(error);
                  }
                }
    return (
<Modal isOpen={isOpen} onRequestClose={closeModal} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
  overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
  <h1>Do you want to delete the item</h1>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleclose}>Close</button>
  <button
    className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handledel}
  >
    Delete
  </button>
</Modal>
    )
}
export default ProductDelete;