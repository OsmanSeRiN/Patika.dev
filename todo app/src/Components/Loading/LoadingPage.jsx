import React from 'react';
import './LoadingPage.css'; // CSS dosyasını import ediyoruz

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;
