import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext.jsx';

import auth_background from '@/assets/images/auth/auth_background.jpg';
import douceur_logo from '@/assets/images/logos/footer_logo.png';

function Register() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState({});
  const [backendError, setBackendError] = useState({});
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setBackendError('');

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!registerForm.username)
      newErrors.username = 'El nombre de usuario es requerido';
    else if (registerForm.username.length < 3)
      newErrors.username =
        'El nombre de usuario debe tener al menos 3 caracteres';
    else if (registerForm.username.length > 20)
      newErrors.username =
        'El nombre de usuario no puede tener más de 20 caracteres';

    if (!registerForm.email) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(registerForm.email))
      newErrors.email = 'El email es inválido';

    if (!registerForm.password)
      newErrors.password = 'La contraseña es requerida';
    else if (registerForm.password.length < 8)
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';

    if (!registerForm.password_confirmation)
      newErrors.password_confirmation =
        'La confirmación de contraseña es requerida';
    else if (registerForm.password !== registerForm.password_confirmation)
      newErrors.password_confirmation = 'Las contraseñas no coinciden';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      try {
        const response = await axios.post(`${apiUrl}/register`, registerForm);
        console.log('Usuario registrado correctamente:', response.data);

        const { token, data: user } = response.data;
        localStorage.setItem('token', token);
        setAuth({ token, user });

        navigate('/');
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setBackendError(error.response.data.data);
        } else {
          console.error('Error al registrar usuario:', error);
        }
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${auth_background})` }}
    >
      <div className="border-2 border-[#ddc58A] bg-[#faedcd] rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img
            src={douceur_logo}
            alt="Logo de la Pastelería"
            className="w-32 h-32"
          />
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600">Usuario</label>
            <input
              type="text"
              name="username"
              placeholder="usuario"
              value={registerForm.username}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.username || backendError.username ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {(error.username || backendError.username) && (
              <p className="text-red-500 text-sm mt-1">
                {error.username || backendError.username}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={registerForm.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.email || backendError.email ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {(error.email || backendError.email) && (
              <p className="text-red-500 text-sm mt-1">
                {error.email || backendError.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={registerForm.password}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.password || backendError.password ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {(error.password || backendError.password) && (
              <p className="text-red-500 text-sm mt-1">
                {error.password || backendError.password}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="********"
              value={registerForm.password_confirmation}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.password_confirmation || backendError.password_confirmation ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {(error.password_confirmation ||
              backendError.password_confirmation) && (
              <p className="text-red-500 text-sm mt-1">
                {error.password_confirmation ||
                  backendError.password_confirmation}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#BB9D74] hover:bg-[#BD9A6B] text-white font-bold py-2 px-4 mt-8 mb-4 rounded focus:outline-none focus:shadow-outline w-full transform transition-transform duration-100 hover:scale-105"
          >
            Registrarse
          </button>
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-700">
              ¿Ya tienes una cuenta?
            </span>{' '}
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-700 hover:underline hover:text-[#d4a373]"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
