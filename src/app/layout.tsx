import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StudentProvider } from "../context/StudentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Management System",
  description: "Manage your students efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StudentProvider>{children}</StudentProvider>
      </body>
    </html>
  );
}
