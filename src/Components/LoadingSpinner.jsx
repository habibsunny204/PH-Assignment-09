import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className='min-h-[calc(100vh-285px)] flex justify-center items-center'>
      <PacmanLoader color='blue'/>
    </div>
  );
};

export default LoadingSpinner;