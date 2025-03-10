import React, { useState } from "react";
import styles from "./AddTeacher.module.css";
import Navbar from "../components/Navbar";

export default function AddTeacher() {
  const [teacher, setTeacher] = useState({
    id:"",
    Teacher_name: "",
    father_husband_name: "",
    qualification: "",
    phone_Number: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      const response = await fetch("http://127.0.0.1:8000/api/teachers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacher),
      });

      const data = await response.json();

      if (response.status === 201) {
        setSuccessMessage("Teacher added successfully!");
        setError("");
        setTeacher({
          id:"",
          Teacher_name: "",
          father_husband_name: "",
          qualification: "",
          phone_Number: "",
        });
      } else {
        setError(data.error || "An error occurred");
        setSuccessMessage("");
      }
    } catch (error) {
      setError("Error occurred while adding teacher");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles["add-teacher-container"]}>
        <h2>Add Teacher</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
            <label>Teacher ID:</label>
            <input
              type="number"
              name="id"
              value={teacher.id} 
              placeholder="Enter Teacher ID..."
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Teacher Name:</label>
            <input
              type="text"
              name="Teacher_name"
              value={teacher.Teacher_name}
              placeholder="Enter Teacher Name..."
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label>Father/Husband Name:</label>
            <input
              type="text"
              name="father_husband_name"
              value={teacher.father_husband_name}
              placeholder="Enter Father/Husband Nam..."
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label>Qualification:</label>
            <input
              type="text"
              name="qualification"
              value={teacher.qualification}
              placeholder="Enter Teacher Qualification..."
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone_Number"
              value={teacher.phone_Number}
              placeholder="Enter Phone Number..."
              onChange={handleChange}
              required
            />
          </div>

          <button className={styles.save} type="submit">Add Teacher</button>
        </form>
      </div>
    </div>
  );
}
