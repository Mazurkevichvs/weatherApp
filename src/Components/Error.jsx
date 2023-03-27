import React from 'react';
import './Error.scss';

const Error = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
    </div>
  );
};

export default Error;
