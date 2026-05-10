import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import ScrollToTopButton from '../components/ScrollToTopButton'; // 👈 ضيف ده

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton /> {/* 👈 ضيف ده هنا */}
    </div>
  );
}