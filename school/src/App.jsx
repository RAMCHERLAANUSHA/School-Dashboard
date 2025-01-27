import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import StudentList from "./pages/StudentList";
import TeacherList from './pages/TeacherList';
import ViewStudent from "./pages/ViewStudent";
import TeacherEdit from "./pages/EditTeacher";
import StudentEdit from "./pages/EditStudent";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/teachers-list" element={<TeacherList />} />
        <Route path="/view-student/:id" element={<ViewStudent />} />
        <Route path="/teacher/edit/:id" element={<TeacherEdit/>} />
        <Route path="/student/edit/:id" element={<StudentEdit/>} />
        </Routes>
    </Router>
  );
}