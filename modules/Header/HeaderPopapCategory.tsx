
"use client";
import React, { useContext, useState, useEffect } from "react";

import HeaderPopopCategoryItem from "@/components/HeaderPopopCategoryItem";
import { Context } from "@/context/Context";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const { data: categories, isLoading } = getCategories();

  const [selectedCategory, setSelectedCategory] = useState<HeaderCategoriesType | null>(null);

  const handleCategoryClick = (item: HeaderCategoriesType) => {
    setSelectedCategory(item);
    console.log(item.subCategories); 
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <div
      className={`${
        showCategory ? "h-[570px] border " : "h-0"
      } w-full z-[9999] absolute duration-300 flex shadow-xl overflow-hidden bg-white top-[100px] `}
    >
      <div className="w-[30%] flex flex-col py-[43px] px-[32px] bg-[#ebeff3] border">
        {categories.map((item: HeaderCategoriesType) => (
          
          <div 
            key={item.id} 
            onClick={() => handleCategoryClick(item)}
            className={`${selectedCategory?.id === item.id ? "bg-white" : ""} p-2 rounded-md cursor-pointer`}
          >
            <HeaderPopopCategoryItem item={item} />
          </div>
          
        ))}
      </div>

      <div className="w-[70%] bg-white p-4">
        {selectedCategory ? (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
            <ul className="space-y-2">
              {selectedCategory.subCategories?.map((sub) => (
                <li key={sub.id} className="text-gray-700">
                  {sub.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-gray-400">Select a category to see subcategories</div>
        )}
      </div>
    </div>
  );
};

export default HeaderPopapCategory;

