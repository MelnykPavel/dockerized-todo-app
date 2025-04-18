import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FullScreenLoader from '@components/FullScreenLoader';
import { useTasks } from '@context/TasksProvider';
import TaskForm from '@components/TaskCard/TaskForm';

const validateField = (field, value) => {
  if (!value.trim()) {
    return `${field} is required.`;
  }
  return '';
};

const initFormState = {
  title: '',
  description: '',
  errors: {},
};

export default function TaskCard({ mode = 'create' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, task, fetchTaskById, createTask, updateTask } = useTasks();

  const [localMode, setLocalMode] = useState(mode);
  const [formState, setFormState] = useState(initFormState);

  useEffect(() => {
    if (localMode !== 'create') {
      fetchTaskById(id);
    }
  }, [localMode, id, fetchTaskById]);

  useEffect(() => {
    if (task && localMode !== 'create') {
      setFormState((prev) => ({
        ...prev,
        title: task.title || '',
        description: task.description || '',
      }));
    }
  }, [task, localMode]);

  const validateForm = (formState) => {
    const { title, description } = formState;
    const newErrors = {};

    const titleError = validateField('Title', title);
    const descriptionError = validateField('Description', description);

    if (titleError) newErrors.title = titleError;
    if (descriptionError) newErrors.description = descriptionError;

    return newErrors;
  };

  const handleTaskSubmit = async () => {
    const { title, description } = formState;

    if (localMode === 'create') {
      await createTask({ title, description });
      setFormState(initFormState);
      navigate('/');
    }
    if (localMode === 'edit') {
      await updateTask(id, { title, description });
      setLocalMode('view');
    }
    if (localMode === 'view') {
      setLocalMode('edit');
    }

    setFormState((prev) => ({ ...prev, errors: {} }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formState);

    if (Object.keys(newErrors).length > 0) {
      setFormState((prev) => ({ ...prev, errors: newErrors }));
      return;
    }

    await handleTaskSubmit();
  };

  const handleModeChange = () => {
    if (localMode === 'edit') return setLocalMode('view');
    return navigate('/');
  };

  if (loading) return <FullScreenLoader />;

  return (
    <div className="m-4 w-full">
      <TaskForm
        mode={localMode}
        task={task}
        formState={formState}
        setFormState={setFormState}
        onSubmit={handleSubmit}
        onModeChange={handleModeChange}
      />
    </div>
  );
}
