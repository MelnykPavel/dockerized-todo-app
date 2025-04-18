import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { TasksProvider } from '@context/TasksProvider';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <TasksProvider>
      <div className="flex flex-col [--header-height:2.5rem] md:h-screen">
        <Header className="min-h-[var(--header-height)] bg-gray-100" />
        <div className="relative flex min-h-[calc(100vh_-_var(--header-height))] grow bg-gray-100">
          <Sidebar />
          <main className="mx-auto flex w-full max-w-[1200px] pb-14 md:pb-0">
            <Outlet />
          </main>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </TasksProvider>
  );
}
