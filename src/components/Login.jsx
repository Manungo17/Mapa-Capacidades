import React from 'react';

const Login = () => {
  const handleLogin = () => {
    alert('Simulación de inicio de sesión con Google');
  };

  return (
    <div className="text-center mt-10">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;