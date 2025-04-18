import { useLocation, Link } from 'react-router';

import { FaTasks } from 'react-icons/fa';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { FaRegCircle } from 'react-icons/fa';

const sidebarItems = [
  { icon: <FaTasks />, title: 'All Tasks', path: '/tasks/all' },
  { icon: <FaRegCircle />, title: 'Open', path: '/tasks/open' },
  { icon: <MdOutlineTaskAlt />, title: 'Completed', path: '/tasks/completed' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed bottom-0 max-h-14 w-full bg-purple-200 p-2 md:relative md:max-h-full md:w-52 md:p-4">
      <ul className="flex items-center justify-around text-sm sm:space-x-4 md:block md:space-y-4">
        {sidebarItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                aria-current={
                  location.pathname === item.path ? 'page' : undefined
                }
                className="flex w-full cursor-pointer items-center space-x-2 rounded p-2 aria-[current=page]:bg-purple-500 aria-[current=page]:text-white"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
