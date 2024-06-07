import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext.jsx';

import auth_background from '../../assets/images/auth/auth_background.jpg';
import douceur_logo from '../../assets/images/logos/footer_logo.png';

function Login() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [backendError, setBackendError] = useState('');
  const { setAuth, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setBackendError('');

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!loginForm.email) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(loginForm.email))
      newErrors.email = 'El email es inválido';

    if (!loginForm.password) newErrors.password = 'La contraseña es requerida';

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
        const response = await axios.post(`${apiUrl}/login`, loginForm);
        console.log('Sesión iniciada correctamente:', response.data);

        const { token, data: user } = response.data;
        localStorage.setItem('token', token);
        setAuth({ token, user });
        setIsLoggedIn(true);

        navigate('/');
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setBackendError(error.response.data.data.email);
        } else if (error.response && error.response.status === 401) {
          setBackendError(error.response.data.message);
        } else {
          console.error('Error al iniciar sesión:', error);
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
        {backendError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{backendError}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={loginForm.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.email || backendError ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
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
              value={loginForm.password}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${error.password || backendError ? 'border-red-500' : 'focus:ring-[#bb9d74]'}`}
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#BB9D74] hover:bg-[#BD9A6B] text-white font-bold py-2 px-4 mt-8 mb-4 rounded focus:outline-none focus:shadow-outline w-full transform transition-transform duration-100 hover:scale-105"
          >
            Iniciar Sesión
          </button>
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-700">
              ¿Aún no tienes una cuenta?
            </span>{' '}
            <Link
              to="/registro"
              className="text-sm font-semibold text-gray-700 hover:underline hover:text-[#d4a373]"
            >
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
