import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import schoolIcon from "../assets/school.jpg";

export default function Navbar(){
  return (
    <nav className={styles.navbar}>
      <ul>
      <li className={styles.school}>
          <img src={schoolIcon} alt="School Icon" className={styles.icon} />
          School Dashboard
          </li>
        <li><Link to="/dashboard">Timetable</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
        <li><Link to="/add-teacher">Add Teacher</Link></li>
        <li><Link to="/student-list">Student List</Link></li>
        <li><Link to="/teachers-list">Teachers List</Link></li>
      </ul>
    </nav>
  );
};

