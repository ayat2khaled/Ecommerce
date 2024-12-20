import React, { useState } from "react";
import music from '../../assets/imagesCategories/1681511964020.jpeg'
import mens from '../../assets/imagesCategories/1681511865180.jpeg'
import women from '../../assets/imagesCategories/1681511818071.jpeg'
import market from '../../assets/imagesCategories/1681511452254.png'
import baby from '../../assets/imagesCategories/1681511427130.png'
import home from '../../assets/imagesCategories/1681511392672.png'
import books from '../../assets/imagesCategories/1681511368164.png'
import beauty from '../../assets/imagesCategories/1681511179514.png'
import mobiles from '../../assets/imagesCategories/1681511156008.png'
import electronics from '../../assets/imagesCategories/1681511121316.png'


function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Music", image: music },
    { name: "Men's Fashion", image: mens },
    { name: "Women's Fashion", image: women },
    { name: "SuperMarket" , image: market},
    { name: "Baby & Toys", image: baby  },
    { name: "Home", image: home },
    { name: "Books" , image: books,},
    { name: "Beauty & Health",  image: beauty },
    { name: "Mobiles" ,  image: mobiles},
    { name: "Electronics" , image: electronics},
  ];

  const subcategories = {
    Music:[],
    "Men's Fashion":["Bags & luggage" , "Men is Clothing"],
    "Women's Fashion": ["Kid is Fashion", "Handbags", "Eyewear", "Jewellery", "Watches", "Footwear", "Women is Clothing"],
    SuperMarket:["Pet Supplies", "Candy & Chocolate", "Baby Food","Breakfast Food" , "Snack Food", "Home Care & Cleaning", "Beverages", "Canned Dry and Package Foods"],
    "Baby & Toys": ["Toys", "Potty Training", "Bouncers & Swings", "Car Seats & Strollers","Nursing & Feeding", "Bathing & Skin Care", "Diapers & Diaper Bags", "Baby Safety Products"],
    Home:["Kitchen & Dining","Home Decor", "Furniture","Tools & Home Improvement","Bath & Bedding","Drinkware", "Cookware", "Large Appliances","Home Appliances"],
    Books:[],
    "Beauty & Health":["Health & Nutrition ", "Personal Care","Skin Care","Hair Care","Makeup","Fragrance"],
    Mobiles:["Mobile Gaming & VR Gadgets", "Covers & Screen protectors", "Charger & Cables", "Power Banks","Earphones","Wireless Earphones","Smartwatches & Accessories","All Tablets","All Mobile Phones","Mobile New Arrivals"],
    Electronics: [
      "Computer Accessories",
      "Computer Components",
      "Data Storage",
      "Networking Products",
      "Printers & Accessories",
      "Cameras & Accessories",
      "Video Games",
      "Audio & Home Entertainment",
      "Laptops & Accessories",
      "TVs, Satellites & Accessories",
    ],
    
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5 text-center text-primary-800 font-bold">Categories</h1>
    
      <div className="grid grid-cols-3 gap-4 mb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className="border border-gray-300 rounded-lg  text-center hover:shadow-lg transition-shadow bg-white overflow-hidden w-90"
          >
            <img src={category.image} alt={category.name} className="w-full h-80 object-cover" />
           
            
            <div className="p-4"><h2 className="text-lg font-semibold text-center  text-green-700">{category.name}</h2></div>
            
          </div>
        ))}
      </div>

      
      {selectedCategory && (
        <div>
          <h2 className="text-xl mb-5 text-center text-primary-800 font-bold">{selectedCategory} Subcategories</h2>
          <div className="grid grid-cols-3 gap-4">
            {subcategories[selectedCategory]?.map((subcategory, index) => (
              <div
                key={index}
                className="p-3 border border-gray-300 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                {subcategory}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;