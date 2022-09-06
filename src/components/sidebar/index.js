import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store';
import MenuList from './MenuList';
import MenuImage from './MenuImage';

// import ImgControl from '../../assets/control.png';
import ImgClose from '../../assets/icon-close-white.png';
import ImgLogo from '../../assets/logo.png';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const DataMenu = useSelector((state) => state.list);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    async function Fetch() {
      await dispatch(fetchData());
    }
    Fetch();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!DataMenu) return <div>Menu not found...</div>;

  return (
    <div
      id='sidebar'
      className={` ${
        open ? 'w-72' : 'w-20 '
      } bg-blue-500 h-screen p-5 pt-8 relative duration-300 overflow-y-auto overflow-x-hidden`}
    >
      <header className='flex w-full items-center justify-between'>
        <img
          src={ImgLogo}
          className={`cursor-pointer duration-500 py-2 ${
            open && 'rotate-[360deg]'
          }`}
          onClick={() => setOpen(!open)}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 w-fit ${
            !open ? 'opacity-0' : 'opacity-1'
          }`}
        >
          Hallo Avana
        </h1>
        <img
          src={ImgClose}
          className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          onClick={() => setOpen(false)}
          width='20'
          heigth='20'
        />
      </header>
      <ul className='pt-6'>
        {DataMenu.map((Menu, index) => {
          if (Menu.isShowed)
            return (
              <div className='flex items-start py-2' key={index}>
                <MenuImage num={index} />
                <MenuList open={open} Menu={Menu} type={'parent'} />
              </div>
            );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
