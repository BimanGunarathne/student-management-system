"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Don't show header on the home page
  if (pathname === "/") return null;

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:underline">
          Student Management
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/dashboard"
                className={`hover:underline ${
                  pathname.startsWith("/dashboard") ? "font-bold" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className={`hover:underline ${
                  pathname === "/register" ? "font-bold" : ""
                }`}
              >
                Register Student
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
