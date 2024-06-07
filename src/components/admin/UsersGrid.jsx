import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from '@/components/admin/DataTable.jsx';

const UsersGrid = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [users, setUsers] = useState({});
  const userColumns = [
    {
      accessoryKey: 'id',
      header: 'ID',
    },
    {
      accessoryKey: 'username',
      header: 'USUARIO',
    },
    {
      accessoryKey: 'email',
      header: 'EMAIL',
    },
    {
      accessoryKey: 'address',
      header: 'DIRECCIÓN',
    },
    {
      accessoryKey: 'isAdmin',
      header: 'PERFIL',
    },
  ];

  const handleLoadUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  useEffect(() => {
    handleLoadUsers();
  }, []);

  return <DataTable columns={userColumns} data={users} />;
};

export default UsersGrid;
