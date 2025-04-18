export default function FormField({
  label,
  name,
  value,
  onChange,
  error,
  isReadOnly = false,
  placeholder = '',
  maxLength,
  as = 'input',
}) {
  const isValid = error
    ? 'border-error focus:ring-error'
    : 'border-gray-300 focus:ring-purple-500';

  const commonProps = {
    name,
    value,
    onChange,
    maxLength,
    readOnly: isReadOnly,
    placeholder,
    className: `w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none ${
      isReadOnly ? 'cursor-not-allowed bg-gray-100' : ''
    } ${isValid}`,
  };
  return (
    <>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          {...commonProps}
          className={`h-full resize-none ${commonProps.className}`}
        />
      ) : (
        <input type="text" {...commonProps} />
      )}
      <div className="mt-1 min-h-[1.25rem]">
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </>
  );
}
