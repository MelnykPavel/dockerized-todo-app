import { createContext, useContext } from 'react';
import useTasksHook from '../hooks/useTasks';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const tasks = useTasksHook();
  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
