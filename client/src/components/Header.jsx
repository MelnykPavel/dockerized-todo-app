import clsx from 'clsx';
export default function Header({ className = '' }) {
  const baseStyles = 'bg-purple-500 flex justify-start items-center px-6';
  return (
    <header className={clsx(baseStyles, className)}>
      <h1 className="text-2xl font-bold text-white">TO DO LIST APP</h1>
    </header>
  );
}
