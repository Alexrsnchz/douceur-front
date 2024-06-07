import { useEffect, useState } from 'react';
import axios from 'axios';

function Featured() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((response) => {
        const data = response.data;

        // Inicializamos el array para los 3 productos con más likes
        let topThree = [];

        // Recorremos los productos para encontrar los 3 con más likes
        for (const item of data) {
          if (topThree.length < 3) {
            topThree.push(item);
            topThree.sort((a, b) => b.likes - a.likes);
          } else if (item.likes > topThree[2].likes) {
            topThree[2] = item;
            topThree.sort((a, b) => b.likes - a.likes);
          }
        }

        setFeatured(topThree);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <section id="products" className="py-20 px-4 bg-[#d5bdaf]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          Productos Destacados
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={product.prodImg}
                alt={product.prodName}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-md md:text-lg font-bold text-[#d4a373] line-clamp-1">
                    {product.prodName}
                  </h3>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium text-white"
                    style={{ backgroundColor: product.catColor }}
                  >
                    <img
                      src={product.catIcon}
                      alt="Categoría del producto"
                      className="w-4 h-4 mr-1"
                    />
                    {product.catName}
                  </span>
                </div>
                <div className="mt-4 items-align text-end">
                  <span className="text-white font-bold border-2 border-[#d4a373] bg-[#d4a373] bg-opacity-90 rounded-md px-2 py-0.5">
                    {product.likes} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
