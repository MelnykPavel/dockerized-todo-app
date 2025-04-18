import { useNavigate } from 'react-router';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDoneAll } from 'react-icons/md';
import { MdOutlineRemoveDone } from 'react-icons/md';
import Button from './Button';
import FullScreenLoader from './FullScreenLoader';
import { useTasks } from '../context/TasksProvider';

import { formattedDate } from '../utils/formattedDate';

export default function TaskItem({ task }) {
  const navigate = useNavigate();

  const { loading, updateTask, deleteTask } = useTasks();

  const handleViewTask = () => navigate(`/task/${task.id}`);

  const handleToggleDone = async (e) => {
    e.stopPropagation();
    await updateTask(task.id, { ...task, is_completed: !task.is_completed });
  };

  const handleEditTask = (e) => {
    e.stopPropagation();
    navigate(`/edit/${task.id}`);
  };

  const handleDeleteTask = async (e) => {
    e.stopPropagation();
    await deleteTask(task.id);
  };
  const isCompleted = task.is_completed ? (
    <MdOutlineDoneAll className="text-success" />
  ) : (
    <MdOutlineRemoveDone className="text-error" />
  );

  const textClassName =
    'max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap md:max-w-md lg:max-w-lg';

  return (
    <div
      className="flex items-center justify-between rounded bg-white p-4 shadow-md shadow-gray-500"
      onClick={handleViewTask}
    >
      <div className="flex flex-col">
        <span>{formattedDate(task?.created_at)}</span>
        <strong className={textClassName}>{task.title}</strong>
        <span className={textClassName}>{task.description}</span>
      </div>
      <div className="flex space-x-4 text-2xl">
        <Button variant="pure" onClick={handleToggleDone}>
          {isCompleted}
        </Button>
        <Button variant="pure" onClick={handleEditTask}>
          <FaEdit className="text-purple-900" />
        </Button>
        <Button variant="pure" onClick={handleDeleteTask}>
          <FaRegTrashCan className="text-error" />
        </Button>
      </div>
      {loading && <FullScreenLoader />}
    </div>
  );
}
