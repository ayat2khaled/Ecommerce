import React from "react";

const Ccard = ({ brand, onClick }) => {
  return (
    <div className="p-6" onClick={() => onClick(brand)} > 
      <div>
          <div className="border border-gray-300 p-5 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <img
              src={brand.logo}
              alt={brand.name}
              className="mx-auto mb-2 w-30 h-30 object-contain"
            />
            <p className="text-center text-gray-600">{brand.name}</p>
            
          </div>
        
        
      </div>
       
    
    </div>
  );

};

export default Ccard;