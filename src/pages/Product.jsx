import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';
import like_icon from '@/assets/images/products/like_icon.svg';
import { CartContext } from '../context/CartContext';

function Product() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(`${apiUrl}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10">No se ha encontrado el producto</div>
    );
  }

  const isAvailable = product.availability === 'Disponible';
  const availabilityClass = isAvailable ? 'text-green-600' : 'text-red-600';

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f1e5d1] flex flex-col">
        <div className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-lg flex-grow mx-4 my-4 md:mx-8 md:my-8 lg:mx-16 xl:mx-24 p-4 md:p-8 lg:p-12">
          <div
            className="md:w-1/2 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${product.prodImg})` }}
          >
            <img
              src={product.prodImg}
              alt="Producto"
              className="w-full h-full object-cover opacity-0 rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center p-4 md:p-8 lg:p-12">
            <div
              className="flex text-white text-xs px-3 py-1 rounded-full font-semibold mb-2 max-w-max"
              style={{ backgroundColor: product.catColor }}
            >
              <img
                src={product.catIcon}
                alt="Icono de la categoría"
                className="h-5"
              />
              <span className="text-sm font-semibold text-white ml-2">
                {product.catName}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.prodName}
            </h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-xl md:text-2xl font-bold text-gray-900 mr-4">
                {product.price}€
              </span>
              <span className={`${availabilityClass} font-semibold`}>
                {product.availability}
              </span>
            </div>
            <div className="flex flex-wrap space-x-4 mb-6">
              <Button
                className={`bg-[#FC9B74] hover:bg-[#D07D5C] text-white px-6 py-2 rounded-md shadow-md transition duration-300 mb-2 md:mb-0 ${
                  !isAvailable && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isAvailable}
                onClick={() => addToCart(product)}
              >
                Añadir al Carrito
              </Button>
              <Button className="flex items-center bg-pink-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300 transition duration-300">
                <img src={like_icon} alt="Like Icon" className="h-5 w-5 mr-1" />
                <span className="font-semibold text-pink-500">Like</span>
              </Button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Alérgenos
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.allergens &&
                  product.allergens.map((allergen) => (
                    <div
                      key={allergen.id}
                      className="flex items-center text-white text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ backgroundColor: allergen.color }}
                    >
                      <img
                        src={allergen.icon}
                        alt={allergen.name}
                        className="h-5 w-5 mr-2"
                      />
                      <span>{allergen.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
