import react from 'react';
const ProductCard = ({ product }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg backdrop-blur-lg hover:border-[2px] border-[#D3D3D3]">
         <img className="w-full" src={product.image} alt={product.name} />
         <div className="px-6 py-4">
           <div className="font-bold text-xl mb-2">{product.name}</div>
           <p className="text-gray-700 text-base">{product.description}</p>
         </div>
         <div className="px-6 py-4">
           <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
             Juice
           </span>
           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
             ${product.price}
           </span>
         </div>
       </div>
  
     
    );
  };
  
  export default ProductCard;
// 