export default function Error500() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <main className="bg--purple-100 flex min-h-screen flex-col items-center justify-center px-4 text-center text-gray-900">
      <img src="/500-cat.png" alt="Confused cat" className="mb-6 w-64" />
      <h1 className="mb-2 text-4xl font-bold text-purple-800 md:text-5xl">
        Oops!
      </h1>
      <h2 className="mb-1 text-2xl md:text-3xl">Something went wrong</h2>
      <p className="mb-4 max-w-md text-base md:text-lg">
        An unexpected error occurred. Please try refreshing the page or come
        back later.
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
