import { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { useNavigate, useParams } from 'react-router';

import TaskItem from './TaskItem';
import Button from './Button';
import FullScreenLoader from './FullScreenLoader';
import { useTasks } from '@context/TasksProvider';

function EmptyState({ message = 'No data available.' }) {
  return (
    <div className="flex grow items-center justify-center">
      <span>{message}</span>
    </div>
  );
}

export default function TaskList({ className = '' }) {
  const navigate = useNavigate();
  const { filter } = useParams();
  const { loading, tasks, fetchTasks } = useTasks();
  const baseStyles = 'grow p-4 flex flex-col';

  const handleAddTask = () => navigate('/add');

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.is_completed);
    }
    if (filter === 'open') {
      return tasks.filter((task) => !task.is_completed);
    }
    return tasks;
  }, [tasks, filter]);

  const emptyStateMessage =
    filter === 'completed'
      ? 'No completed tasks yet. Add a task and mark it as completed!'
      : 'No tasks yet. Add a task to get started!';

  if (loading) return <FullScreenLoader />;

  return (
    <div className={clsx(baseStyles, className)}>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl capitalize">{filter} Tasks</span>
        <Button type="button" variant="primary" onClick={handleAddTask}>
          <span>Add Task</span>
        </Button>
      </div>
      {filteredTasks.length ? (
        <div className="space-y-4 overflow-y-scroll pb-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <EmptyState message={emptyStateMessage} />
      )}
    </div>
  );
}
