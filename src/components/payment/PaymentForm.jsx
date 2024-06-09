import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '@/context/CartContext';
import axios from 'axios';
import footer_logo from '@/assets/images/logos/footer_logo.png';
import Navbar from '../misc/Navbar';
import AuthContext from '@/context/AuthContext';

const PaymentForm = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const location = useLocation();
  const totalAmount = location.state?.totalPrice || 0;
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const response = await axios.post(
        `${apiUrl}/create-payment-intent`,
        {
          amount: totalAmount,
        },
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      const { clientSecret } = response.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.paymentIntent.status === 'succeeded') {
        setSuccess(true);
        clearCart();
        setTimeout(function () {
          navigate('/');
        }, 3000);
      } else if (result.error) {
        setError(result.error.message);
      }
    } catch (error) {
      setError('Pago rechazado.');
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-8 bg-white flex items-center justify-center">
            <img
              src={footer_logo}
              alt="Company Logo"
              className="h-32 md:h-48"
            />
          </div>
          <div className="md:w-1/2 p-8 bg-white">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
              Completa tu pago
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Detalles de la tarjeta
                </label>
                <CardElement className="p-4 border border-gray-300 rounded-lg text-base" />
              </div>
              {error && <div className="mb-4 text-red-500">{error}</div>}
              {success && (
                <div className="mb-4 text-green-500">
                  Pago completado. Redirigiendo...
                </div>
              )}
              <button
                className={`w-full px-4 py-3 font-bold text-white rounded-lg transition-colors duration-300 ${isProcessing ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-600'}`}
                disabled={!stripe || isProcessing}
              >
                {isProcessing
                  ? 'Procesando...'
                  : `Pagar ${(totalAmount / 100).toFixed(2)} €`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
