import React, { createContext, useContext, useState, ReactNode } from "react";
import { Student, initialStudents } from "@/data/students";

interface StudentContextType {
  students: Student[];
  addStudent: (student: Omit<Student, "id" | "attendance" | "status">) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const addStudent = (student: Omit<Student, "id" | "attendance" | "status">) => {
    const newStudent: Student = {
      ...student,
      id: students.length + 1,
      attendance: 0,
      status: "Absent",
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) throw new Error("useStudents must be used within StudentProvider");
  return context;
};
