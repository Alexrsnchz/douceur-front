import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast.js';
import axios from 'axios';

import admin_add_icon from '@/assets/images/admin/admin_add_icon.svg';
import admin_edit_icon from '@/assets/images/admin/admin_edit_icon.svg';
import admin_delete_icon from '@/assets/images/admin/admin_delete_icon.svg';

import DeleteUserModal from './modals/DeleteUserModal';
import AddUserModal from './modals/AddUserModal';

const UsersTable = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();

  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleLoadUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const confirmedDeletedUser = (id) => {
    setUserToDelete(id);
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`${apiUrl}/users/${userToDelete}`);
      setUsers(users.filter((user) => user.id !== userToDelete));
      setUserToDelete(null);
      toast({
        title: 'Listo!',
        description: 'Se ha eliminado el usuario.',
        status: 'success',
        duration: 2000,
        className:
          'bg-[#CA8787] text-white font-semibold border-2 border-[#A87676]',
      });
    } catch (error) {
      toast({
        title: 'Whoops!',
        description: 'No se ha podido eliminar el usuario.',
        status: 'error',
        duration: 2000,
        variant: 'destructive',
      });

      console.error('Error al eliminar el usuario:', error);
    }
  };

  const handleUserAdded = () => {
    handleLoadUsers();
    toast({
      title: 'Listo!',
      description: 'Se ha añadido el usuario.',
      status: 'success',
      duration: 2000,
      className:
        'bg-[#CA8787] text-white font-semibold border-2 border-[#A87676]',
    });
  };

  useEffect(() => {
    handleLoadUsers();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row-reverse mb-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-1 bg-[#C39898] hover:bg-[#A67C7C] border-2 border-[#A87676] font-semibold text-white rounded-md"
        >
          <div className="flex items-center gap-1">
            <img
              src={admin_add_icon}
              alt="Icono de añadir"
              className="w-5 h-5"
            />
            Añadir usuario
          </div>
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#a79277] text-white font-semibold text-base">
          <tr>
            <th className="py-1.5 px-4">ID</th>
            <th className="py-1.5 px-4">Usuario</th>
            <th className="py-1.5 px-4">Email</th>
            <th className="py-1.5 px-4">Perfil</th>
            <th className="py-1.5 px-4">Dirección</th>
            <th className="py-1.5 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 font-semibold text-sm">
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-1.5 px-4 text-center">{user.id}</td>
              <td className="py-1.5 px-4">{user.username}</td>
              <td className="py-1.5 px-4">{user.email}</td>
              <td className="py-1.5 px-4 text-center">
                {user.isAdmin ? (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#745B5B] bg-[#867070] text-white rounded-full">
                    Admin
                  </span>
                ) : (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#A87676] bg-[#CA8787] text-white rounded-full">
                    Usuario
                  </span>
                )}
              </td>
              <td className="py-1.5 px-4">{user.address}</td>
              <td className="py-1.5 px-4">
                <div className="flex space-x-2 justify-center">
                  <button className="bg-[#BCA78B] hover:bg-[#9E896D] border-2 border-[#a79277] rounded-md p-1.5">
                    <img
                      src={admin_edit_icon}
                      alt="Icono de editar"
                      className="w-5 h-5"
                    />
                  </button>
                  <button
                    onClick={() => confirmedDeletedUser(user.id)}
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
      {userToDelete !== null && (
        <DeleteUserModal
          onConfirm={handleDeleteUser}
          onCancel={() => setUserToDelete(null)}
        />
      )}
      {showCreateModal && (
        <AddUserModal
          onClose={() => setShowCreateModal(false)}
          onUserAdded={handleUserAdded}
        />
      )}
    </div>
  );
};

export default UsersTable;
