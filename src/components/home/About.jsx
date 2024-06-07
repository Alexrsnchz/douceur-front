import home_about from '../../assets/images/home/home_about.jpg';
import home_quality_icon from '../../assets/images/home/home_quality_icon.png';
import home_experience_icon from '../../assets/images/home/home_experience_icon.png';
import home_creativity_icon from '../../assets/images/home/home_creativity_icon.png';
import home_about_cake from '../../assets/images/home/home_about_cake.jpg';
import home_about_cupcakes from '../../assets/images/home/home_about_cupcakes.jpg';
import home_about_cookies from '../../assets/images/home/home_about_cookies.jpg';

function About() {
  return (
    <section id="about" className="py-20 bg-[#faedcd] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#d4a373]">
          Sobre Nosotros
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={home_about}
              alt="Douceur banner"
              className="rounded-lg shadow-md w-full h-75 object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-600 font-semibold">
            <p className="text-lg">
              En <span className="text-[#d4a373] font-bold">Douceur</span> nos
              especializamos en crear momentos dulces e inolvidables. Desde
              1990, hemos estado sirviendo pasteles, galletas, y postres hechos
              con amor y los mejores ingredientes.
            </p>
            <p className="text-lg">
              Nuestra misión es ofrecer productos de alta calidad que deleiten a
              nuestros clientes. Creemos que cada celebración merece un toque
              especial y trabajamos diligentemente para asegurarnos de que cada
              pastel sea una obra de arte.
            </p>
            <p className="text-lg">
              Contamos con un equipo de pasteleros talentosos que combinan
              técnicas tradicionales con un toque moderno para crear productos
              únicos. Nos enorgullece ser parte de tus momentos especiales.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 mb-4 bg-[#ffb3ba] rounded-full flex items-center justify-center">
                <img
                  src={home_quality_icon}
                  alt="Icono de calidad"
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#d4a373] mb-2">
              Ofrecemos calidad
            </h3>
            <p className="text-gray-600 font-semibold">
              Usamos solo los mejores ingredientes, frescos y de alta calidad,
              para garantizar que cada bocado sea delicioso y memorable.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 mb-4 bg-[#ffdfba] rounded-full flex items-center justify-center">
                <img
                  src={home_experience_icon}
                  alt="Icono de experiencia"
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#d4a373] mb-2">
              Tenemos experiencia
            </h3>
            <p className="text-gray-600 font-semibold">
              Más de 30 años de experiencia en la creación de pasteles y postres
              exquisitos para cualquier ocasión.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 mb-4 bg-[#bae1ff] rounded-full flex items-center justify-center">
                <img
                  src={home_creativity_icon}
                  alt="Icono de creatividad"
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#d4a373] mb-2">
              Sobresalimos en creatividad
            </h3>
            <p className="text-gray-600 font-semibold">
              Nuestros pasteleros son verdaderos artistas, siempre innovando y
              creando diseños únicos para nuestros clientes.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={home_about_cake}
              alt="Pastel"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <h3 className="text-xl font-bold text-[#d4a373] mt-4">
              Pasteles Personalizados
            </h3>
            <p className="text-gray-600 font-semibold mt-2">
              Creamos pasteles a medida para cualquier ocasión, desde bodas
              hasta cumpleaños.
            </p>
          </div>
          <div className="text-center">
            <img
              src={home_about_cupcakes}
              alt="Cupcakes"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <h3 className="text-xl font-bold text-[#d4a373] mt-4">
              Variedad de Cupcakes
            </h3>
            <p className="text-gray-600 font-semibold mt-2">
              Ofrecemos una amplia variedad de cupcakes, perfectos para
              cualquier evento o simplemente para darte un capricho.
            </p>
          </div>
          <div className="text-center">
            <img
              src={home_about_cookies}
              alt="Galletas"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <h3 className="text-xl font-bold text-[#d4a373] mt-4">
              Galletas Artesanales
            </h3>
            <p className="text-gray-600 font-semibold mt-2">
              Nuestras galletas artesanales son el acompañamiento perfecto para
              tus meriendas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
