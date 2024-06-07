import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import CategoryFilter from '@/components/products/CategoryFilter';
import { ScrollArea } from '@/components/ui/scroll-area';
import axios from 'axios';
import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';

const Products = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.catName === selectedCategory)
    : products;

  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-[#f1e5d1]">
        <div className="hidden lg:block w-1/4 h-full">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="w-full lg:w-3/4 h-full">
          <ScrollArea className="h-full">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
