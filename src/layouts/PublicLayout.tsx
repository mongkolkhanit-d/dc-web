import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
