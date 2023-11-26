import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = async () => {
    if (!username || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    try {
      const userRole = await authenticateUserAndGetRole(username, password);
      onLogin(userRole);
      localStorage.setItem('UserRole', userRole); // Guardar el rol en localStorage al iniciar sesión
      navigate(userRole === 'admin' ? '/admin' : '/user#inicio');
    } catch (error) {
      setError(error.message);
    }
  };

  const authenticateUserAndGetRole = async (username, password) => {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        resolve('admin');
      } else if (username === 'user1' && password === '1234') {
        resolve('user');
      } else {
        reject(new Error('Credenciales incorrectas'));
      }
    });
  };

  return (
    <div className='form'>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="text-danger">{error}</div>}
      <button onClick={handleLoginClick}>Iniciar sesión</button>
      
    </div>
  );
};

export default Login;
