import Button from '@components/Button';
import { modeLabels } from '@components/TaskCard/modeLabels';
import FormField from '@components/TaskCard/FormField';
import { formattedDate } from '@utils/formattedDate';
import { useTasks } from '@context/TasksProvider';

export default function TaskForm({
  mode,
  formState,
  setFormState,
  onSubmit,
  onModeChange,
}) {
  const { task } = useTasks();

  const isReadOnly = mode === 'view';
  const isDisabled = !formState.title.trim() || !formState.description.trim();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: prev.errors[name] && value.trim() ? '' : prev.errors[name],
      },
    }));
  };

  return (
    <div className="flex h-full grow justify-center md:py-6">
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col rounded-xl bg-white p-6 shadow-md md:w-2/3 lg:w-1/2"
      >
        <div className="flex grow flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              {modeLabels[mode].title}
            </h2>
            <span>{task ? formattedDate(task.created_at) : ''}</span>
          </div>

          <div>
            <FormField
              label="Title"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              error={formState.errors.title}
              isReadOnly={isReadOnly}
              placeholder="Enter a title"
              maxLength={100}
            />
          </div>

          <div className="flex grow flex-col">
            <FormField
              label="Description"
              name="description"
              as="textarea"
              value={formState.description}
              onChange={handleInputChange}
              error={formState.errors.description}
              isReadOnly={isReadOnly}
              placeholder="Describe the task"
              maxLength={200}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <Button
            className="max-w-2/3"
            variant="primary"
            onClick={onModeChange}
          >
            <span>{modeLabels[mode].button.secondary}</span>
          </Button>
          <Button
            disabled={isDisabled}
            className="max-w-1/2"
            type="submit"
            variant="primary"
          >
            <span>{modeLabels[mode].button.primary}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
