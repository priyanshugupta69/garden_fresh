import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="max-w-sm rounded overflow-hidden shadow-lg backdrop-blur-lg hover:border-[2px] border-[#D3D3D3]">
        <div className="card-image-container">
          <img className="object-cover h-40 w-full" src={product.image} alt={product.name} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="flex flex-wrap px-6 py-4">
          <div className="bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            {product.type}
          </div>
          <div className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ${product.price}
          </div>
         <button href = "/#" className="ml-auto bg-[#2bc6eb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



// 