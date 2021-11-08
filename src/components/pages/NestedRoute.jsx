import React from 'react';
import { useNavigate } from 'react-router-dom';

const NestedRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is a nested route</h1>
      <button className='nested-button' onClick={() => navigate(-1)}>
        Return
      </button>
    </>
  );
};

export default NestedRoute;
