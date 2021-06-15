import './App.css';
import Axios from 'axios'
import React,{useState,useEffect} from 'react';
import UserList from './UserList';

function App() {
  const [users,setUsers]=useState([])

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers=async()=>{
    const response=await Axios('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data)    
  }
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;