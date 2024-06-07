import { Link } from 'react-router-dom';
import home_background from '../../assets/images/home/home_background.jpg';

function Header() {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${home_background})` }}
    >
      <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Bienvenido a Douceur
          </h1>
          <p className="text-white font-semibold text-lg mt-4">
            Deliciosos pasteles y postres para todos tus eventos especiales
          </p>
          <Link
            to="/productos"
            className="mt-6 inline-block bg-white border-2 border-gray-300 shadow-lg font-semibold text-[#a98467] py-2 px-5 rounded-md transition-transform duration-100 ease-in-out transform hover:scale-105"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
