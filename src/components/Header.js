import React, { useState } from 'react';

const Header = () => {
const [lightMode, setLightMode] = useState(false);

  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  const headerClasses = `flex-start justify-center p-6 ${lightMode ? 'bg-slate-300 text-black' : 'bg-slate-900 text-white'}`;

  return (
    <div className='w-full h-20'>
      <header className={headerClasses}>
        <h1 className='font-bold text-3xl'>TEXTFUNCTIONS:</h1>
        <button
          className={`bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 ml-auto -mt-10 ${
            lightMode ? 'text-black' : 'text-white'
          }`}
          onClick={toggleMode}
        >
          {lightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
    </div>
  );
};

export default Header;
