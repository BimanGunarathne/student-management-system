"use client";

import StudentTable from "../../components/StudentTable";
import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";

export default function DashboardPage() {
  const { students } = useContext(StudentContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
      <StudentTable students={students} />
    </div>
  );
}
