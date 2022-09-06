import React from 'react';
import Header from './components/header';
import Page from './components/page';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='h-screen flex-1'>
        <Header />
        <Page />
      </div>
    </main>
  );
};

export default App;
