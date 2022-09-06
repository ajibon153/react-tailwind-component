import { capitalizeFirstLetter } from '../../utils/letter';
import MenuList from './MenuList';
import ImgControl from '../../assets/control-solid.png';

const MenuHasChild = ({ Menu, SubMenuOpen }) => {
  return (
    <>
      <p className='flex justify-between w-full items-center'>
        {capitalizeFirstLetter(Menu.id)}
        {Menu.isAllowed && (
          <img
            src={ImgControl}
            className={`cursor-pointer duration-200 h-2 w-4 ${
              SubMenuOpen && 'rotate-[180deg]'
            }`}
            width={20}
            height={10}
          />
        )}
      </p>
      {SubMenuOpen && (
        <ul
          className={`pt-4 duration-300 overflow-hidden ${
            !SubMenuOpen ? 'max-h-16' : 'max-h-fit'
          }`}
        >
          {Menu.childs.map((menu, i) => {
            if (menu.isShowed) return <MenuList Menu={menu} key={i} />;
          })}
        </ul>
      )}
    </>
  );
};

export default MenuHasChild;
