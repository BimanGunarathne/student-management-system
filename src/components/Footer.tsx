"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  // Don't show footer on the home page
  if (pathname === "/") return null;

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>© {new Date().getFullYear()} Student Management System</p>
        <Link href="/" className="hover:underline">
          Back to Home
        </Link>
      </div>
    </footer>
  );
}
