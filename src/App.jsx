import { useEffect } from 'react'
import { getAllUsers } from './assets/services/getAllUsers'
import { createUser } from './assets/services/createUser'
import { useState } from 'react'
import { updateUser } from './assets/services/updateUser'
import { deleteUser } from './assets/services/deleteUser'

import Header from './assets/components/Header/Header'
import UserList from './assets/components/UserList/UserList'
import Modal from './assets/components/Modal/Modal'
import UserForm from './assets/components/UserForm/UserForm'

import './App.css'


function App() {

const [users, setUsers] = useState([]);
const [isVisibleModal, setIsVisibleModal] = useState(false);
const [editUserData, setEditUserData] = useState(null)


const loadUsers= async () => {
  const usersData= await getAllUsers();
  setUsers(usersData);
};

const deleteUserById = async (id) => {
  await deleteUser(id);
  await loadUsers();
}

const handleCreate = () => {
  setIsVisibleModal(true);
};

const handleCloseModal = () => {
  setEditUserData(null);
  setIsVisibleModal(false);
}

const handleSend = async (data) => {
  if (data.id) await updateUser(data.id, data);
  else await createUser(data);

 await loadUsers();
  setIsVisibleModal(false);
};

const handleUserEdit = (user) => {
  setEditUserData(user);
  setIsVisibleModal(true);
}

useEffect(() => {
  loadUsers();
}, [])

  return (
    <>
    
    <Header onCreate={handleCreate}/>

    <UserList users={users} onUserEdit={handleUserEdit} onUserDelete={deleteUserById}/>

    <Modal isVisible={isVisibleModal}>
    <UserForm 
    onClose={handleCloseModal}
    onSend={handleSend}
    initialData={editUserData}
    />
    </Modal>
    </>
  )
}

export default App
