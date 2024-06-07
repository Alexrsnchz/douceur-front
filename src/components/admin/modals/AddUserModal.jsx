import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast.js';

const AddUserModal = ({ onClose, onUserAdded }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    isAdmin: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'El nombre de usuario es obligatorio.';
    }

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Las contraseñas no coinciden.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/users`, formData);
      if (response.data.status !== false) {
        toast({
          title: 'Listo!',
          description: 'Se ha añadido el usuario.',
          status: 'success',
          duration: 2000,
          className:
            'bg-[#CA8787] text-white font-semibold border-2 border-[#A87676]',
        });
        onUserAdded();
        onClose();
      } else {
        setErrors(response.data.data);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        setErrors(error.response.data.data);
      } else {
        setErrors({ general: 'Error al añadir el usuario.' });
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Añadir usuario</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm">
                {errors.password_confirmation}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Address (opcional)
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="font-semibold">Admin</label>
          </div>
          {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
