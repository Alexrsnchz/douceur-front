import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import contact_contactform_background from '../../assets/images/contact/contact_contactform_background.jpg';

function ContactForm() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    content: '',
    privacy: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'El nombre es obligatorio';
    if (!formData.lastName) errors.lastName = 'Los apellidos son obligatorios';
    if (!formData.email) {
      errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }
    if (!formData.content) errors.content = 'El mensaje es obligatorio';
    if (!formData.privacy)
      errors.privacy = 'Debes aceptar la política de privacidad';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`${apiUrl}/mail`, {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          content: formData.content,
        });
        if (response.status === 200) {
          toast({
            title: 'Correo enviado',
            description: 'Te responderemos lo más pronto posible!',
            className:
              'bg-[#a78567] text-white font-semibold border-2 border-[#997a5f]',
          });
          setFormData({
            name: '',
            lastName: '',
            email: '',
            content: '',
            privacy: false,
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'Whoops!',
            description:
              'Ha habido un error al enviar el mensaje. Inténtalo de nuevo.',
          });
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Whoops!',
          description:
            'Ha habido un error al enviar el mensaje. Inténtalo de nuevo.',
        });
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${contact_contactform_background})` }}
    >
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:flex">
        <div className="bg-[#F7F7F7] p-8 lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center text-[#333333] mb-4">
            ¿Tienes alguna duda?
          </h1>
          <p className="text-lg text-gray-600 font-semibold mb-4">
            Si tienes alguna pregunta sobre nuestros productos, establecimientos
            o cualquier otra inquietud, por favor no dudes en contactarnos.
            Puedes enviar un mensaje a través de este formulario y te
            responderemos lo más pronto posible.
          </p>
          <p className="text-lg text-gray-600 font-semibold mb-4">
            También puedes llamarnos por teléfono para recibir atención
            inmediata. Estamos aquí para ayudarte y asegurarnos de que tengas la
            mejor experiencia posible con nuestros servicios.
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Además, si tienes alguna sugerencia o comentario sobre cómo podemos
            mejorar, nos encantaría saberlo. ¡Tu opinión es muy importante para
            nosotros!
          </p>
        </div>
        <div className="p-8 lg:w-1/2 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-400 focus:border-[#a78567] focus:ring-[#a78567] p-3 text-base"
                type="text"
                placeholder="Nombre"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-400 focus:border-[#a78567] focus:ring-[#a78567] p-3 text-base"
                type="text"
                placeholder="Apellidos"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.lastName}
                </p>
              )}
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-400 focus:border-[#a78567] focus:ring-[#a78567] p-3 text-base"
                type="email"
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full h-32 rounded-md border border-gray-400 focus:border-[#a78567] focus:ring-[#a78567] p-3 text-base"
                placeholder="Mensaje"
              ></textarea>
              {formErrors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.content}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2 font-semibold text-[#333333] text-base">
              <input
                name="privacy"
                type="checkbox"
                checked={formData.privacy}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#333333] accent-[#7A5F43]"
              />
              <div>He leído y acepto la</div>
              <label>
                <Link to="/politica" className="hover:text-[#bd8a5f]">
                  política de privacidad
                </Link>
              </label>
            </div>
            {formErrors.privacy && (
              <p className="text-red-500 text-sm">{formErrors.privacy}</p>
            )}
            <div>
              <button
                className="bg-[#bd8a5f] border-2 border-[#a47a57] text-white py-2 px-8 rounded-md hover:bg-[#ac7b52] focus:outline-none focus:ring-2 font-semibold text-md"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
