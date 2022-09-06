import Icon0 from '../../assets/Chart_fill.png';
import Icon1 from '../../assets/User.png';
import Icon2 from '../../assets/Calendar.png';
import Icon3 from '../../assets/Chart.png';
import Icon4 from '../../assets/Chat.png';
import Icon5 from '../../assets/Folder.png';
import Icon6 from '../../assets/Search.png';
import Icon7 from '../../assets/Setting.png';

let dataIcon = [
  {
    num: 0,
    icon: Icon0,
  },
  {
    num: 1,
    icon: Icon1,
  },
  {
    num: 2,
    icon: Icon2,
  },
  {
    num: 3,
    icon: Icon3,
  },
  {
    num: 4,
    icon: Icon4,
  },
  {
    num: 5,
    icon: Icon5,
  },
  {
    num: 6,
    icon: Icon6,
  },
  {
    num: 7,
    icon: Icon7,
  },
];

const MenuImage = ({ num }) => {
  let randomImg = dataIcon.find((index) => index.num === num);

  return (
    <img
      src={randomImg.icon}
      className='h-10 w-10 p-2 mt-1'
      width={40}
      height={20}
    />
  );
};

export default MenuImage;
