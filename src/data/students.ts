export interface Student {
  id: number;
  name: string;
  rollNumber: string;
  class: string;
  attendance: number;
  status: "Present" | "Absent";
}

export const initialStudents: Student[] = [
  { id: 1, name: "Rahul Sharma", rollNumber: "CS101", class: "10-A", attendance: 85, status: "Present" },
  { id: 2, name: "Anita Verma", rollNumber: "CS102", class: "10-A", attendance: 70, status: "Absent" },
  { id: 3, name: "Vikram Singh", rollNumber: "CS103", class: "10-B", attendance: 92, status: "Present" },
  { id: 4, name: "Priya Patel", rollNumber: "CS104", class: "10-B", attendance: 78, status: "Present" },
  { id: 5, name: "Arjun Kumar", rollNumber: "CS105", class: "10-A", attendance: 65, status: "Absent" },
  { id: 6, name: "Sneha Reddy", rollNumber: "CS106", class: "10-C", attendance: 90, status: "Present" },
  { id: 7, name: "Karan Gupta", rollNumber: "CS107", class: "10-C", attendance: 82, status: "Present" },
  { id: 8, name: "Meera Joshi", rollNumber: "CS108", class: "10-A", attendance: 55, status: "Absent" },
  { id: 9, name: "Rohan Das", rollNumber: "CS109", class: "10-B", attendance: 88, status: "Present" },
  { id: 10, name: "Divya Nair", rollNumber: "CS110", class: "10-C", attendance: 95, status: "Present" },
];

export const weeklyAttendance = [
  { day: "Mon", percentage: 88 },
  { day: "Tue", percentage: 82 },
  { day: "Wed", percentage: 90 },
  { day: "Thu", percentage: 75 },
  { day: "Fri", percentage: 85 },
];
