import React from 'react';
import home_testimonials_review_icon from '../../assets/images/home/home_testimonials_review_icon.svg';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Juan Pérez',
      text: 'Los mejores pasteles que he probado. Definitivamente regresaré por más.',
    },
    {
      id: 2,
      name: 'Ana Gómez',
      text: 'Excelente servicio y deliciosos postres. Mi pastelería favorita.',
    },
    {
      id: 3,
      name: 'Carlos Martínez',
      text: 'La atención al cliente es insuperable y los pasteles son una delicia.',
    },
    {
      id: 4,
      name: 'María Fernández',
      text: 'Siempre frescos y deliciosos. Recomiendo esta pastelería a todos mis amigos.',
    },
    {
      id: 5,
      name: 'Luisa Rodríguez',
      text: 'Los sabores son auténticos y los diseños de los pasteles son hermosos.',
    },
    {
      id: 6,
      name: 'Pedro Sánchez',
      text: 'Me encantó el pastel personalizado que hicieron para mi cumpleaños. ¡Gracias!',
    },
  ];

  const StarRating = () => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={home_testimonials_review_icon}
            alt="Star"
            className="h-5 w-5"
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-pink-100 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#d4a373] mb-10">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <p className="text-gray-700 font-semibold mb-4">
                {testimonial.text}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <StarRating />
                <h3 className="text-lg font-bold text-right text-[#d4a373]">
                  - {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
