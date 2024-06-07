import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast.js';

const AddPostModal = ({ onClose, onPostAdded }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    state: 'Borrador', // Predeterminado a 'Borrador'
    postImg: '',
    user_id: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const newErrors = {};

    if (!formData.title) {
      newErrors.title = 'El título es obligatorio.';
    }

    if (!formData.content) {
      newErrors.content = 'El contenido es obligatorio.';
    }

    if (!formData.user_id) {
      newErrors.user_id = 'El ID del usuario es obligatorio.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/posts`, formData);
      if (response.data.status !== false) {
        toast({
          title: 'Listo!',
          description: 'Se ha añadido el post.',
          status: 'success',
          duration: 2000,
          className:
            'bg-[#CA8787] text-white font-semibold border-2 border-[#A87676]',
        });
        onPostAdded();
        onClose();
      } else {
        setErrors(response.data.data);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        setErrors(error.response.data.data);
      } else {
        setErrors({ general: 'Error al añadir el post.' });
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Añadir post</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Contenido</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Estado</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="Publicado">Publicado</option>
              <option value="Borrador">Borrador</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Imagen del post (URL)
            </label>
            <input
              type="text"
              name="postImg"
              value={formData.postImg}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.postImg && (
              <p className="text-red-500 text-sm">{errors.postImg}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">ID del usuario</label>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.user_id && (
              <p className="text-red-500 text-sm">{errors.user_id}</p>
            )}
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

export default AddPostModal;
