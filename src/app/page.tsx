import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Student Management System
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Student Management System. Please choose an option
          below to get started.
        </p>
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="block w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 text-lg font-medium"
          >
            View Dashboard
          </Link>
          <Link
            href="/register"
            className="block w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200 text-lg font-medium"
          >
            Register New Student
          </Link>
        </div>
      </div>
    </div>
  );
}
