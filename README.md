# Smart Attendance System

### 🚀 Tagline:
Redefining Attendance for the Digital Classroom.

---

## 📌 Overview

Smart Attendance System is a modern, AI-ready attendance management dashboard designed to replace traditional manual attendance systems. 

The platform provides real-time attendance tracking, performance insights, and visual analytics in a clean, responsive interface.

Currently, this version is built with dummy data for frontend demonstration and is structured to support seamless backend integration.

---

## 🎯 Problem Statement

Manual attendance systems are prone to:
- Proxy attendance
- Human errors
- Lack of analytics
- No real-time tracking
- No performance insights

Institutions require a smarter, digital solution that automates attendance tracking while providing meaningful insights.

---

## ✨ Features

### 🔐 Authentication
- Login page with form validation
- Redirect-based dashboard access

### 📊 Dashboard
- Sidebar navigation (Dashboard, Students, Attendance, Analytics)
- Summary cards:
  - Total Students
  - Present Today
  - Absent Today
  - Attendance Percentage
- Recent attendance table

### 👨‍🎓 Students Management
- Student list table (Name, Roll No, Class, Status)
- Search functionality
- Add Student form with validation
- Data stored in local state

### 📈 Analytics
- Bar chart visualizing individual attendance performance
- Line chart showing weekly attendance trends
- Dynamic calculations from application state

---

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- React Router
- Recharts
- Local State Management (useState / Context)

---

## 📂 Project Structure

src/
├── components/
│ ├── ui/
│ ├── AppSidebar.tsx
│ ├── DashboardLayout.tsx
│ └── NavLink.tsx
│
├── pages/
│ ├── Login.tsx
│ ├── Dashboard.tsx
│ ├── Students.tsx
│ ├── AddStudent.tsx
│ ├── Attendance.tsx
│ └── Analytics.tsx
│
├── hooks/
├── lib/
├── App.tsx
└── main.tsx

---

## 🔮 Future Scope

- Backend integration (Node.js / Express / Django)
- Database integration (MongoDB / Firebase)
- Face Recognition based automated attendance
- Role-based authentication (Admin / Teacher / Student)
- Attendance export (PDF / Excel)
- Cloud deployment
- AI-based engagement tracking

---

## 🧪 Current Status

This version is a frontend prototype built with dummy JSON data.  
Backend integration is planned in the next development phase.

---

## 👩‍💻 Author

Frontend developed for Hackathon submission.

---

## 📜 License

This project is created for educational and hackathon purposes.
