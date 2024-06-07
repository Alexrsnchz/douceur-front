import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast.js';
import axios from 'axios';

import admin_add_icon from '@/assets/images/admin/admin_add_icon.svg';
import admin_edit_icon from '@/assets/images/admin/admin_edit_icon.svg';
import admin_delete_icon from '@/assets/images/admin/admin_delete_icon.svg';
import admin_like_icon from '@/assets/images/admin/admin_like_icon.svg';

const DeleteProductModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl text-center font-semibold mb-4">
        Confirmar eliminación
      </h2>
      <p className="mb-4">
        ¿Estás seguro de que deseas eliminar este producto?
      </p>
      <div className="flex justify-center space-x-5">
        <button
          onClick={onConfirm}
          className="px-4 py-1.5 bg-red-500 hover:bg-red-700 font-semibold text-white rounded-md"
        >
          Eliminar
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-1.5 bg-gray-300 hover:bg-gray-400 font-semibold text-black hover:text-white rounded-md"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

const ProductsTable = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();

  const [products, setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleLoadProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener los products:', error);
    }
  };

  const confirmedDeletedProduct = (id) => {
    setProductToDelete(id);
  };
  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`${apiUrl}/products/${productToDelete}`);
      setProducts(products.filter((product) => product.id !== productToDelete));
      setProductToDelete(null);
      toast({
        title: 'Listo!',
        description: 'Se ha eliminado el producto.',
        status: 'success',
        duration: 2000,
        className:
          'bg-[#CA8787] text-white font-semibold border-2 border-[#A87676]',
      });
    } catch (error) {
      toast({
        title: 'Whoops!',
        description: 'No se ha podido eliminar el producto.',
        status: 'error',
        duration: 2000,
        variant: 'destructive',
      });

      console.error('Error al eliminar el producto:', error);
    }
  };

  useEffect(() => {
    handleLoadProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row-reverse mb-4">
        <button
          //onClick={() => setShowCreateModal(true)}
          className="px-4 py-1 bg-[#C39898] hover:bg-[#A67C7C] border-2 border-[#A87676] font-semibold text-white rounded-md"
        >
          <div className="flex items-center gap-1">
            <img
              src={admin_add_icon}
              alt="Icono de añadir"
              className="w-5 h-5"
            />
            Añadir producto
          </div>
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#a79277] text-white font-semibold text-base">
          <tr>
            <th className="py-1.5 px-4">ID</th>
            <th className="py-1.5 px-4">Imagen</th>
            <th className="py-1.5 px-4">Categoría</th>
            <th className="py-1.5 px-4">Producto</th>
            <th className="py-1.5 px-4">Precio</th>
            <th className="py-1.5 px-4">Disponibilidad</th>
            <th className="py-1.5 px-4">Likes</th>
            <th className="py-1.5 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 font-semibold text-sm">
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-1.5 px-4 text-center">{product.id}</td>
              <td className="py-1.5 px-4">
                <img
                  src={product.prodImg}
                  alt="Imagen del producto"
                  className="w-20 h-20 rounded"
                />
              </td>
              <td className="py-1.5 px-4">
                <span
                  className="inline-block px-3 py-0.5 text-sm font-semibold text-white rounded-full"
                  style={{ backgroundColor: product.catColor }}
                >
                  {product.catName}
                </span>
              </td>
              <td className="py-1.5 px-4">{product.prodName}</td>
              <td className="py-1.5 px-4 font-bold">{product.price}€</td>
              <td className="py-1.5 px-4 text-center">
                {product.availability === 'Disponible' ? (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#745B5B] bg-[#867070] text-white rounded-full">
                    Disponible
                  </span>
                ) : (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#A87676] bg-[#CA8787] text-white rounded-full">
                    Agotado
                  </span>
                )}
              </td>
              <td className="py-1.5 px-4">
                <div className="flex justify-center items-center gap-1">
                  <img
                    src={admin_like_icon}
                    alt="Icono de eliminar"
                    className="w-5 h-5"
                  />
                  <span className="font-bold">{product.likes}</span>
                </div>
              </td>
              <td className="py-1.5 px-4">
                <div className="flex space-x-2 justify-center">
                  <button
                    //onClick={() => handleEdit(user)}
                    className="bg-[#BCA78B] hover:bg-[#9E896D] border-2 border-[#a79277] rounded-md p-1.5"
                  >
                    <img
                      src={admin_edit_icon}
                      alt="Icono de editar"
                      className="w-5 h-5"
                    />
                  </button>
                  <button
                    onClick={() => confirmedDeletedProduct(product.id)}
                    className="bg-[#BCA78B] hover:bg-[#9E896D] border-2 border-[#a79277] rounded-md p-1.5"
                  >
                    <img
                      src={admin_delete_icon}
                      alt="Icono de eliminar"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {productToDelete !== null && (
        <DeleteProductModal
          onConfirm={handleDeleteProduct}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  );
};

export default ProductsTable;
