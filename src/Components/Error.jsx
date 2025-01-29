import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-2">Oops! Page not found.</p>
            <p className="text-gray-600 mt-1">The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    );
};

export default Error;