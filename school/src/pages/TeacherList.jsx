import React, { useState, useEffect } from "react";
import styles from "./TeacherList.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/teachers/");
        const data = await response.json();

        if (response.status === 200) {
          setTeachers(data);
        } else {
          setError("Error fetching teacher data");
        }
      } catch (err) {
        setError("Error fetching teacher data");
      }
    };

    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/teachers/${id}/`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
      } else {
        setError("Error deleting teacher");
      }
    } catch (err) {
      setError("Error deleting teacher");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by Teacher Name"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles["teacher-list-container"]}>
        <h2>Teachers List</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <table className={styles["teacher-table"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Teacher Name</th>
              <th>Father/Husband Name</th>
              <th>Qualification</th>
              <th>Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.Teacher_name}</td>
                  <td>{teacher.father_husband_name}</td>
                  <td>{teacher.qualification}</td>
                  <td>{teacher.phone_Number}</td>
                  <td>
                        <Link to={`/teacher/edit/${teacher.id}`}>
                          <button className={styles.editButton}>✏️</button>
                        </Link>
                 </td>
                 <td>
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDelete(teacher.id)}
                        >
                          🗑️
                        </button>
                    </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No teachers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
