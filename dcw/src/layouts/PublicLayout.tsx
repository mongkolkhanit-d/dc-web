import { Outlet } from 'react-router-dom';
export default function PublicLayout() {
  return (
    <div>
      <header>Public Nav</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
