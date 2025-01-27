import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./ViewStudent.module.css";

export default function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/students/${id}`);
        const data = await response.json();

        if (response.status === 200) {
          setStudent(data);
        } else {
          setError("Error fetching student details");
        }
      } catch (err) {
        setError("Error fetching student details");
      }
    };

    if (id) {
      fetchStudentDetails();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className={styles["student-details-container"]}>
        {error && <p className={styles.error}>{error}</p>}

        {student ? (
          <div className={styles["student-details"]}>
            <h2>Student Details</h2>
            <table className={styles.table}>
              <tbody>
              `<tr>
                  <th>ID</th>
                  <td>{student.id}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{student.student_name}</td>
                </tr>
                <tr>
                  <th>Surname</th>
                  <td>{student.surname}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{student.gender}</td>
                </tr>
                <tr>
                  <th>Standard</th>
                  <td>{student.standard}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{student.dob}</td>
                </tr>
                <tr>
                  <th>Father Name</th>
                  <td>{student.father_name}</td>
                </tr>
                <tr>
                  <th>Mother Name</th>
                  <td>{student.mother_name}</td>
                </tr>
                <tr>
                  <th>Caste</th>
                  <td>{student.caste}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{student.phone_Number}</td>
                </tr>
                <tr>
                  <th>Admission Date</th>
                  <td>{student.admission_date}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{student.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading student details...</p>
        )}
      </div>
    </div>
  );
}
