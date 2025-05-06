"use client";

import Link from "next/link";
import { Student } from "../types/student";

interface StudentTableProps {
  students: Student[];
}

export default function StudentTable({ students }: StudentTableProps) {
  if (students.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No students registered yet.</p>
        <Link
          href="/register"
          className="mt-4 inline-block bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 text-black"
        >
          Register a Student
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-black">ID</th>
            <th className="py-2 px-4 border-b text-black">Name</th>
            <th className="py-2 px-4 border-b text-black">Age</th>
            <th className="py-2 px-4 border-b text-black">Email</th>
            <th className="py-2 px-4 border-b text-black">Grade</th>
            <th className="py-2 px-4 border-b text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-black text-center">
                {student.id}
              </td>
              <td className="py-2 px-4 border-b text-black text-center">
                {student.name}
              </td>
              <td className="py-2 px-4 border-b text-black text-center">
                {student.age}
              </td>
              <td className="py-2 px-4 border-b text-black text-center">
                {student.email}
              </td>
              <td className="py-2 px-4 border-b text-black text-center">
                {student.grade}
              </td>
              <td className="py-2 px-4 border-b text-black text-center">
                <Link
                  href={`/dashboard/students/${student.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
