import Header from '../components/header';
import Page from '../components/page';
import SidebarComponent from '../components/sidebar';

const Sidebar = () => {
  return (
    <main className='flex'>
      <SidebarComponent />
      <div className='h-screen flex-1'>
        <Header />
        <Page />
      </div>
    </main>
  );
};

export default Sidebar;
