import React, { useState } from 'react';
import './navbar.css';

const Links = [
  { name: 'home', link: '/' },
  { name: 'service', link: '/' },
  { name: 'about', link: '/' },
  { name: 'blog', link: '/' },
  { name: 'contact', link: '/' },
];

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name='logo-ionic'></ion-icon>
          </span>
          Designer
        </div>
        <div
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
          onClick={() => setOpen(!Open)}
        >
          <ion-icon name={`${!Open ? 'menu' : 'close'}`}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            Open ? 'top-20' : 'top-[-500px] opacity-0'
          } md:opacity-100 `}
        >
          {Links.map((link, i) => (
            <li key={i} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-200'
              >
                {link.name.toUpperCase()}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white rounded py-2 px-6 md:ml-8 hover:bg-indigo-400 duration-300'>
      {props.children}
    </button>
  );
};

export default Navbar;
