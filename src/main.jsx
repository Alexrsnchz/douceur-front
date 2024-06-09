import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext.jsx';
import { CartProvider } from '@/context/CartContext.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './index.css';
import Register from '@/components/auth/Register.jsx';
import Login from '@/components/auth/Login.jsx';
import Home from '@/pages/Home.jsx';
import Services from '@/pages/Services.jsx';
import Faq from '@/pages/Faq.jsx';
import Contact from '@/pages/Contact.jsx';
import Administration from '@/pages/Administration.jsx';
import Privacy from '@/pages/Privacy.jsx';
import Terms from '@/pages/Terms.jsx';
import Blog from '@/pages/Blog.jsx';
import Post from '@/pages/Post.jsx';
import Products from '@/pages/Products.jsx';
import Product from '@/pages/Product.jsx';
import PaymentForm from '@/components/payment/PaymentForm.jsx';

const stripePromise = loadStripe('pk_test_51PGGtYKaxJioiza5FXxFrIEPjdKl5gpkMcsYIDZfyInMy5BhxLidCxuxoUu4yMlrIlqakltvWfzgukKdLFF7mi8k00vG9kbsjs');

const router = createBrowserRouter([
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/productos',
    element: <Products />,
  },
  {
    path: '/productos/:id',
    element: <Product />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <Post />,
  },
  {
    path: '/servicios',
    element: <Services />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
  {
    path: '/privacidad',
    element: <Privacy />,
  },
  {
    path: '/terminos',
    element: <Terms />,
  },
  {
    path: '/administracion',
    element: <Administration />,
  },
  {
    path: '/checkout',
    element: (
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>,
);
