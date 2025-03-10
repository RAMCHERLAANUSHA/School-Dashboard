import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import schoolIcon from "../assets/school.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <div className={styles.school}>
          <img src={schoolIcon} alt="School Icon" className={styles.icon} />
          School Dashboard
        </div>
        <button 
          className={styles.toggleButton} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <ul className={`${styles.navMenu} ${menuOpen ? styles.show : ""}`}>
        <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Timetable</Link></li>
        <li><Link to="/add-student" onClick={() => setMenuOpen(false)}>Add Student</Link></li>
        <li><Link to="/add-teacher" onClick={() => setMenuOpen(false)}>Add Teacher</Link></li>
        <li><Link to="/student-list" onClick={() => setMenuOpen(false)}>Student List</Link></li>
        <li><Link to="/teachers-list" onClick={() => setMenuOpen(false)}>Teachers List</Link></li>
      </ul>
    </nav>
  );
}
