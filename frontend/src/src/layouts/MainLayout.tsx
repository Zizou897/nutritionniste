import { ReactNode } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
