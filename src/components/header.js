import React from 'react';

const Header = () => {
  return (
    <header className='p-4 flex justify-between animate-pulse'>
      <div id='left'></div>
      <div id='center' className='flex items-center'>
        <div className='rounded bg-slate-300 h-8 w-48'></div>
      </div>
      <div id='right'>
        <div className='rounded-full bg-slate-300 h-10 w-10'></div>
      </div>
    </header>
  );
};

export default Header;
