import { useNavigate } from 'react-router';

export default function Error404() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-100 px-4 text-center text-gray-900">
      <img src="/404-cat.png" alt="Lost cat" className="mb-6 w-64" />
      <h1 className="mb-2 text-6xl font-bold text-purple-800">404</h1>
      <h2 className="mb-1 text-2xl md:text-3xl">Page Not Found</h2>
      <p className="mb-4 max-w-md text-base md:text-lg">
        Sorry, we couldn&apos;t find the page you are looking for.
      </p>
      <button
        onClick={handleGoHome}
        className="rounded-xl bg-purple-500 px-6 py-3 text-white transition hover:bg-purple-600"
      >
        Go Home
      </button>
    </main>
  );
}
