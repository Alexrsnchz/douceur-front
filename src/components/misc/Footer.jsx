import { Link, NavLink } from 'react-router-dom';

import footer_logo from '../../assets/images/logos/footer_logo.png';
import facebook_icon from '../../assets/images/socials/facebook_icon.svg';
import twitter_icon from '../../assets/images/socials/twitter_icon.svg';
import instagram_icon from '../../assets/images/socials/instagram_icon.svg';
import pinterest_icon from '../../assets/images/socials/pinterest_icon.svg';

function Footer() {
  return (
    <footer className="text-gray-800">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex items-center justify-center">
          <img
            src={footer_logo}
            alt="Douceur footer logo"
            className="w-32 md:w-48"
          />
        </div>
        <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4 md:space-y-8">
          <div className="text-center">
            <span className="font-semibold">
              Síguenos en nuestras redes sociales:
            </span>
            <div className="flex justify-center items-center space-x-4 mt-2">
              <Link
                to="https://www.facebook.com/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook_icon}
                  alt="Enlace a Facebook"
                  className="w-8 h-auto"
                />
              </Link>
              <Link
                to="https://twitter.com/?lang=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter_icon}
                  alt="Enlace a Twitter"
                  className="w-8 h-auto"
                />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram_icon}
                  alt="Enlace a Instagram"
                  className="w-8 h-auto"
                />
              </Link>
              <Link
                to="https://www.pinterest.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={pinterest_icon}
                  alt="Enlace a Pinterest"
                  className="w-8 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <span className="mr-2 font-semibold">O llámanos al:</span>
            <div>+34 612 834 190</div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col items-center justify-center">
          <span className="mb-2 block font-semibold border-b border-gray-400">
            Información
          </span>
          <ul className="text-center">
            <li className="mb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                Productos
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                Servicios
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? 'text-[#d4a373]' : 'hover:text-[#d4a373]'
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t border-gray-300 font-semibold">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
          <p className="mb-4 md:mb-0 text-center">
            &copy; 2024 Douceur. Todos los derechos reservados.
          </p>
          <p className="text-center">
            <Link to="/privacidad" className="mr-2 hover:text-[#d4a373]">
              Política de privacidad
            </Link>
            |
            <Link to="/terminos" className="ml-2 hover:text-[#d4a373]">
              Términos de uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
