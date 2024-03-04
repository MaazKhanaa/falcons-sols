import React from 'react';

const InstallButton = ({ handleClick }) => {
  return (
    <button className='downloadBtn' onClick={handleClick}>
      Install App
    </button>
  );
};

export default InstallButton;
