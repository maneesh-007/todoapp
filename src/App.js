import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import TodoList from './components/pages/TodoList';
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);

  const checkauth = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:8000/users/get-profile", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error checking auth:", error);
    // Handle unauthorized/failed auth here (e.g., redirect to login)
  }
};

  useEffect(()=>{

    checkauth();

  },[])

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} /> 

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo-list" element={<TodoList/>} />

      </Routes>
    </Router>    
  );
}

export default App;
