"use client";

import { createContext, useState, ReactNode } from "react";
import { Student } from "../types/student";

interface StudentContextType {
  students: Student[];
  addStudent: (student: Student) => void;
}

export const StudentContext = createContext<StudentContextType>({
  students: [],
  addStudent: () => {},
});

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
