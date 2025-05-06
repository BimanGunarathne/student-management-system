"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { StudentContext } from "../../../../context/StudentContext";
import Link from "next/link";

export default function StudentDetailPage() {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Student not found</p>
        <Link
          href="/dashboard"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Student Details</h2>
      <div className="space-y-3">
        <p className="text-black">
          <span className="font-semibold">ID:</span> {student.id}
        </p>
        <p className="text-black">
          <span className="font-semibold">Name:</span> {student.name}
        </p>
        <p className="text-black">
          <span className="font-semibold">Age:</span> {student.age}
        </p>
        <p className="text-black">
          <span className="font-semibold">Email:</span> {student.email}
        </p>
        <p className="text-black">
          <span className="font-semibold">Grade:</span> {student.grade}
        </p>
      </div>
      <Link
        href="/dashboard"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
