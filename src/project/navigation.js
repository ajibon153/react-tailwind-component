import React, { useState } from 'react';
import './navigation.css';

const Menus = [
  { name: 'Home', icon: 'home-outline', dis: 'translate-x-0' },
  { name: 'Profile', icon: 'person-outline', dis: 'translate-x-16' },
  { name: 'Message', icon: 'chatbubble-outline', dis: 'translate-x-32' },
  { name: 'Photos', icon: 'camera-outline', dis: 'translate-x-48' },
  { name: 'Setting', icon: 'settings-outline', dis: 'translate-x-64' },
];

const Navigation = () => {
  const [Active, setActive] = useState(0);

  return (
    <div className='bg-white w-fit max-h-[4.4rem] px-6 rounded-t-xl'>
      <ul className='flex relative'>
        <span
          className={`bg-rose-600 border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full duration-500 ${Menus[Active].dis}`}
        >
          <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myshadow1'></span>
          <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myshadow2'></span>
          {/* SET ON TAILWIND CONFIG
          extend:{
            boxShadow: {
              myshadow1: "4.1px -5px 0 0 rgb(17, 24, 39)",
              myshadow2: "-4.1px -5px 0 0 rgb(17, 24, 39)",
            }
          }
          */}
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className='w-16'>
            <a
              onClick={() => setActive(i)}
              className='flex flex-col text-center pt-6'
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  Active === i && '-mt-6 text-white'
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  Active === i
                    ? 'translate-y-4 duration-700 opacity-100'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
