import clsx from 'clsx';
export default function Button({
  children,
  className = '',
  disabled = false,
  variant = 'pure',
  type = 'button',
  onClick,
}) {
  const baseStyles = {
    pure: 'cursor-pointer',
    primary:
      'bg-purple-500 text-white p-3 rounded-md hover:bg-purple-700 transition-colors cursor-pointer disabled:cursor-auto disabled:bg-gray-300',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles[variant], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
