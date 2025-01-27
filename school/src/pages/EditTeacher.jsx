import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditTeacher.module.css";
import Navbar from "../components/Navbar";


export default function TeacherEdit() {
  const { id } = useParams(); 
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function SubmitClick(){
    alert("Update Successfully");
    window.location.href = "/teachers-list";
  }
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/teachers/${id}/`);
        const data = await response.json();

        if (response.status === 200) {
          setTeacher(data);
        } else {
          setError("Error fetching teacher data");
        }
      } catch (err) {
        setError("Error fetching teacher data");
      }
    };

    fetchTeacher();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/teachers/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacher),
      });

      if (response.status === 200) {
        navigate("/teachers");
      } else {
        setError("Error updating teacher data");
      }
    } catch (err) {
      setError("Error updating teacher data");
    }
  };

  if (!teacher) return <div>Loading...</div>;

  return (
    <div>
      <Navbar/>
    <div className={styles.editTeacherContainer}>
      <h2>Edit Teacher</h2>

      {error && <p className={styles.errorMessage}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Teacher Name:</label>
          <input
            type="text"
            name="Teacher_name"  
            value={teacher.Teacher_name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Father/Husband Name:</label>
          <input
            type="text"
            name="father_husband_name"  
            value={teacher.father_husband_name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification" 
            value={teacher.qualification}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_Number" 
            value={teacher.phone_Number}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={SubmitClick} className={styles.submitButton}>
          Update Teacher
        </button>
      </form>
    </div>
    </div>
  );
}
