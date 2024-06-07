import { Card } from '@/components/ui/card.jsx';
import { Link } from 'react-router-dom';
import like_icon from '@/assets/images/products/like_icon.svg';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/productos/${product.id}`}>
      <Card className="m-4 p-4 max-w-sm bg-gray-50 cursor-pointer rounded-2xl shadow-md transform transition-transform hover:scale-105">
        <div>
          <img
            src={product.prodImg}
            alt="Product"
            className="rounded-t-xl rounded-b-md w-full h-60"
          />
        </div>
        <div className="flex items-center pt-4 mb-2">
          <div
            style={{ backgroundColor: product.catColor }}
            className="flex rounded-md px-2 py-1"
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
          <div className="flex items-center text-gray-700 ml-4">
            <img src={like_icon} alt="Like Icon" className="h-5 w-5 mr-1" />
            <span className="text-sm font-semibold">{product.likes}</span>
          </div>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-1">
            {product.prodName}
          </h3>
          <p className="text-sm font-semibold text-gray-600 line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="mt-5">
            <span className="text-gray-700 font-semibold text-xl">
              {product.price}€ / ud
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
