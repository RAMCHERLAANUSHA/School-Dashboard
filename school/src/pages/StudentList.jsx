import React, { useEffect, useState } from "react";
import styles from "./StudentList.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/students/");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = () => {
    const filtered = students.filter((student) => {
      return (
        student.student_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        student.surname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredStudents(filtered);
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/students/${id}/`, {
        method: "DELETE",
      });
  
      if (response.status === 204) {
        setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
        setFilteredStudents((prevFiltered) =>
          prevFiltered.filter((s) => s.id !== id)
        );
      } else {
        setError("Error deleting student");
      }
    } catch (err) {
      setError("Error deleting student");
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by Name or Surname"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Student List</h2>

        {error && <p className={styles.error}>{error}</p>}

        <table className={styles.studentTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Standard</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.student_name}</td>
                <td>{student.surname}</td>
                <td>{student.standard}</td>
                <td>{student.phone_Number}</td>
                <td>{student.address}</td>
                <td>
                  <Link
                    to={`/view-student/${student.id}`}
                    className={styles.linkWrapper}
                  >
                    <button className={styles.viewButton}>View</button>
                  </Link>
                </td>
                <td>
                        <Link to={`/student/edit/${student.id}`}>
                          <button className={styles.editButton}>✏️</button>
                        </Link>
                 </td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(student.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
