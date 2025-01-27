import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditStudent.module.css";
import Navbar from "../components/Navbar";

export default function StudentEdit() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function SubmitClick() {
    alert("Update Successfully");
    window.location.href = "/student-list";
  }

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/students/${id}/`);
        const data = await response.json();

        if (response.status === 200) {
          setStudent(data);
        } else {
          setError("Error fetching student data");
        }
      } catch (err) {
        setError("Error fetching student data");
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/students/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (response.status === 200) {
        navigate("/students");
      } else {
        setError("Error updating student data");
      }
    } catch (err) {
      setError("Error updating student data");
    }
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className={styles.editStudentContainer}>
        <h2>Edit Student</h2>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Student Name:</label>
            <input
              type="text"
              name="student_name"
              value={student.student_name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={student.surname}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Standard:</label>
            <input
              type="number"
              name="standard"
              value={student.standard}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={student.dob}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Father's Name:</label>
            <input
              type="text"
              name="father_name"
              value={student.father_name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Mother's Name:</label>
            <input
              type="text"
              name="mother_name"
              value={student.mother_name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Caste:</label>
            <select
              name="caste"
              value={student.caste}
              onChange={handleChange}
            >
              <option value="OC">OC</option>
              <option value="BC">BC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone_Number"
              value={student.phone_Number}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={student.address}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={SubmitClick} className={styles.submitButton}>
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}
