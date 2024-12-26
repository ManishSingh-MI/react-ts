// src/pages/NotFound.tsx
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">404 - Page Not Found</h2>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <button
          onClick={handleGoHome}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default NotFound;