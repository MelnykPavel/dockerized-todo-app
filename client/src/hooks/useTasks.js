import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MESSAGES = {
  fetchAll: {
    error: 'Failed to fetch tasks',
  },
  fetchOne: {
    error: 'Failed to fetch task',
  },
  create: {
    success: 'Task created successfully',
    error: 'Failed to create task',
  },
  update: {
    success: 'Task updated successfully',
    error: 'Failed to update task',
  },
  delete: {
    success: 'Task deleted successfully',
    error: 'Failed to delete task',
  },
};

export default function useTasks(minDelay = 1000) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRequest = async (
    requestFn,
    { success, error },
    updateFn,
    showLoader = true,
  ) => {
    if (showLoader) setLoading(true);
    setError(null);
    const start = Date.now();

    try {
      const response = await requestFn();

      const elapsed = Date.now() - start;
      const waitTime = Math.max(minDelay - elapsed, 0);
      await delay(waitTime);

      if (updateFn) updateFn(response.data);
      if (success) toast.success(success);

      return response.data;
    } catch (err) {
      console.error(error, err);
      setError(err);
      toast.error(error);
      throw err;
    } finally {
      if (showLoader) setLoading(false);
    }
  };

  const fetchTasks = async () => {
    await handleRequest(
      () => axiosInstance.get('/todos/'),
      MESSAGES.fetchAll,
      setTasks,
    );
  };

  const fetchTaskById = useCallback(async (id) => {
    try {
      await handleRequest(
        () => axiosInstance.get(`/todos/${id}/`),
        MESSAGES.fetchOne,
        setTask,
      );
    } catch (err) {
      if (err?.response?.status === 404) navigate('/404');
    }
  }, []);

  const createTask = async (newTask) => {
    return await handleRequest(
      () => axiosInstance.post('/todos/', newTask),
      MESSAGES.create,
      (data) => setTasks((prev) => [...prev, data]),
      false,
    );
  };

  const updateTask = async (id, updatedTask) => {
    return await handleRequest(
      () => axiosInstance.put(`/todos/${id}/`, updatedTask),
      MESSAGES.update,
      (data) =>
        setTasks((prev) => prev.map((task) => (task.id === id ? data : task))),
      false,
    );
  };

  const deleteTask = async (id) => {
    return await handleRequest(
      () => axiosInstance.delete(`/todos/${id}/`),
      MESSAGES.delete,
      () => setTasks((prev) => prev.filter((task) => task.id !== id)),
    );
  };

  return {
    tasks,
    task,
    loading,
    error,
    fetchTasks,
    fetchTaskById,
    createTask,
    updateTask,
    deleteTask,
  };
}
