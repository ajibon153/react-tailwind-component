import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/letter';
import MenuHasChild from './MenuHasChild';
import MenuWrapper from './MenuWrapper';

let liStyle =
  'flex rounded-md p-2 pr-0 hover:bg-light-white text-sm items-center gap-x-4 mt-2 w-full';

const MenuChild = ({ open = true, Menu, type = '' }) => {
  const [SubMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    if (!open) setSubMenuOpen(false);
  }, [open]);

  function handleShowChild() {
    if (Menu.isAllowed && Menu.childs) setSubMenuOpen(!SubMenuOpen);
  }

  return (
    <li className={liStyle} onClick={(e) => e.stopPropagation()}>
      <MenuWrapper
        style={`${
          !open ? 'w-6 opacity-0' : 'w-full opacity-1'
        } origin-left duration-200 ${
          Menu.isAllowed ? 'text-white cursor-pointer' : 'text-gray-400'
        } `}
        event={handleShowChild}
        Menu={Menu}
        type={type}
      >
        {Menu.childs ? (
          <MenuHasChild Menu={Menu} SubMenuOpen={SubMenuOpen} />
        ) : (
          capitalizeFirstLetter(Menu.id)
        )}
      </MenuWrapper>
    </li>
  );
};

export default MenuChild;
