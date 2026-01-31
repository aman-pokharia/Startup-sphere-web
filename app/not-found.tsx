import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#030014] text-white px-4">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-xl text-gray-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
