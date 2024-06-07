import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';

import servicesBackground from '../assets/images/services/services_background.jpg';
import cakeIcon from '../assets/images/services/cake_icon.svg';
import deliveryIcon from '../assets/images/services/delivery_icon.svg';
import workshopIcon from '../assets/images/services/workshop_icon.svg';
import cateringIcon from '../assets/images/services/catering_icon.svg';
import breakfastIcon from '../assets/images/services/breakfast_icon.svg';
import eventIcon from '../assets/images/services/event_icon.svg';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center py-12"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>{' '}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            Nuestros Servicios
          </h2>

          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-pink-100 border border-pink-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={cakeIcon}
                      alt="Pasteles Personalizados"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Pasteles Personalizados
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Creamos pasteles únicos y personalizados para cualquier
                    ocasión especial. Desde cumpleaños hasta bodas, diseñamos el
                    pastel perfecto para ti.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-100 border border-blue-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={deliveryIcon}
                      alt="Delivery a Domicilio"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Delivery a Domicilio
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Ofrecemos un servicio de entrega a domicilio para que puedas
                    disfrutar de nuestros deliciosos pasteles sin salir de casa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-100 border border-yellow-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={workshopIcon}
                      alt="Talleres de Repostería"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Talleres de Repostería
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Participa en nuestros talleres de repostería y aprende a
                    crear tus propias delicias. Ideal para aficionados y
                    profesionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-100 border border-green-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={cateringIcon}
                      alt="Catering"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Catering
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Ofrecemos servicios de catering para eventos especiales,
                    brindando una variedad de dulces y pasteles para satisfacer
                    a todos tus invitados.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-100 border border-purple-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={breakfastIcon}
                      alt="Desayunos y Meriendas"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Desayunos y Meriendas
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Disfruta de nuestros desayunos y meriendas especiales,
                    perfectos para empezar el día con energía o para una pausa
                    dulce a mitad del día.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-pink-100 border border-pink-100 shadow-md">
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center mt-4">
                    <img
                      src={eventIcon}
                      alt="Eventos Especiales"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Eventos Especiales
                  </CardTitle>
                  <p className="text-gray-600 mt-4">
                    Organizamos y decoramos eventos especiales, proporcionando
                    deliciosos pasteles y postres para hacer de tu evento una
                    ocasión inolvidable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#d4a373] border-2 border-[#A97F55] text-lg text-white px-6 py-6 rounded-md shadow-md hover:bg-[#c58f5b] transition duration-300">
              <Link to="/contacto">Contáctanos para más información</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
