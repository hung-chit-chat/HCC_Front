import Sidebar from './Siderbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-full min-h-screen'>
      <header className='ml-[80px] py-10 text-center bg-violet-50'>
        <h1 className='text-2xl'>My Common Header</h1>
      </header>
      <Sidebar />
      <main className='ml-[80px] pt-10 '>{children}</main>
    </div>
  );
};

export default Layout;
