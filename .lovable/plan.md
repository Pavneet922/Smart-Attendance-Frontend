

# Smart Attendance System

## Problem Statement

Manual attendance systems are prone to proxy marking, human errors, and lack of analytics. 
Institutions require a smarter, digital solution that automates attendance tracking 
while providing real-time insights.


A modern, clean attendance management dashboard with dummy data, sidebar navigation, and analytics charts.

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Recharts
- Local State Management (useState/useContext)


## Pages & Features

### 1. Login Page
- Email & password form with validation feedback
- Login button that redirects to the Dashboard
- Clean, centered card layout

### 2. Dashboard
- Sidebar navigation (Dashboard, Students, Attendance, Analytics) with collapsible support
- Four summary cards: Total Students, Present Today, Absent Today, Attendance %
- Recent attendance table showing today's records

### 3. Students Page
- Table listing all students (Name, Roll Number, Class, Status)
- Search bar to filter by name or roll number
- "Add Student" button linking to the Add Student form

### 4. Add Student Page
- Form with Name, Roll Number, and Class fields
- Submit saves to local state and redirects back to Students list
- Form validation with error messages

### 5. Analytics Page
- Bar chart visualizing individual student attendance performance
- Line chart showing weekly institutional attendance trend
- Dynamic calculations from current app state
- Line chart showing weekly attendance trends

## Data
- All data sourced from local dummy JSON and React state (no backend)
- New students added via the form persist in app state during the session

## Design
- Minimal, modern UI with Tailwind CSS and shadcn/ui components
- Fully responsive layout
- Sidebar with icons that collapses on smaller screens

## Future Scope

- Backend API integration (Node/Express or Django)
- Face Recognition based attendance
- Role-based authentication (Admin/Teacher/Student)
- Real-time cloud database (Firebase / MongoDB)
- Export attendance reports (PDF/Excel)
- AI-based engagement tracking


