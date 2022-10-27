import { useEffect, useState } from 'react'
import UsersService from '../../services/usersService';

const useUsers = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  useEffect( () =>{
      fetchUsers();
  }, []);

  const fetchUsers = () => {
    UsersService.get()
      .then(rows => setUsers(rows))
      .finally(() => setLoading(false))
      .catch(e => console.error(e));
  };

  const createUser = (user) => {
    setLoading(true);
    UsersService.post(user)
      .then(resp => {
          fetchUsers();
          return resp;
      })
      
      .finally(() => setLoading(false))
      .catch(e => console.error(e));
  };

  const editUser = (user) => {
    setLoading(true);
    UsersService.put(user)
      .then(resp => {
        fetchUsers();
        return resp;
      })
      
      .finally(() => setLoading(false))
      .catch(e => console.error(e));
  };

  const deleteUser = (id) => {
    setLoading(true);
    UsersService.delete(id)
      .then(() => fetchUsers() )

      .finally(() => setLoading(false))
      .catch(e => console.error(e));
  };

  return {
    users,
    loading,

    createUser,
    editUser,
    deleteUser
  }
}

export default useUsers
