import { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';

import products_filter_all from '@/assets/images/products/products_filter_all.png';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full h-full bg-white shadow-lg">
      <h2 className="text-xl font-semibold px-8 py-4">Categorías</h2>
      <hr className="mx-5" />
      <ScrollArea className="p-4">
        <ul>
          <li
            key="all"
            className={`cursor-pointer px-4 py-2 my-2 font-semibold text-gray-600 rounded-full transition-colors ${!selectedCategory ? 'selected bg-[#DBB5B5] text-white' : ''}`}
            onClick={() => onCategoryChange('')}
          >
            <div className="flex items-center pl-5">
              <img
                src={products_filter_all}
                alt="Icono de la categoría"
                className="mr-3 w-7 h-7"
              />
              Todas las categorías
            </div>
          </li>
          {categories.map((category) => (
            <li
              key={category.catName}
              className={`cursor-pointer px-4 py-2 my-2 font-semibold text-gray-600 rounded-full transition-colors ${selectedCategory === category.catName ? `selected bg-[#DBB5B5] text-white` : ''}`}
              onClick={() => onCategoryChange(category.catName)}
            >
              <div className="flex items-center pl-5">
                <img
                  src={category.catIcon}
                  alt="Icono de la categoría"
                  className="mr-3 w-7 h-7"
                />
                {category.catName}
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
