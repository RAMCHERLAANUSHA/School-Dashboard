import React, { useState } from 'react';
import styles from './AddStudent.module.css';
import Navbar from '../components/Navbar'

export default function AddStudent() {
  const [student, setStudent] = useState({
    id:"",
    student_name: '',
    surname: '',
    gender: 'M',
    standard: '',
    dob: '',
    father_name: '',
    mother_name: '',
    caste: 'OC',
    phone_Number: '',
    address: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/students/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
  
      const data = await response.json();
  
      if (response.status === 201) {
        setSuccessMessage('Student added successfully!');
        setError('');
        setStudent({
          id:"",
          student_name: '',
          surname: '',
          gender: 'M',
          standard: '',
          dob: '',
          father_name: '',
          mother_name: '',
          caste: 'OC',
          phone_Number: '',
          address: ''
        });
      } else {
        setError(data.error || 'An error occurred');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error occurred while adding student');
      setSuccessMessage('');
    }
  };
  
  return (
    <div>
      <Navbar/>
    <div className={styles['add-student-container']}>
      <h2>Add Student</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
      <div className={styles["form-group"]}>
            <label>Student ID:</label>
            <input
              type="number"
              name="id"
              value={student.id} 
              placeholder="Enter Student ID..."
              onChange={handleChange}
              required
            />
          </div>
        <div className={styles['form-group']}>
          <label>Student Name:</label>
          <input
            type="text"
            name="student_name"
            value={student.student_name}
            onChange={handleChange}
            placeholder='Enter name...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={student.surname}
            onChange={handleChange}
            placeholder='Enter Surname...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Gender:</label>
          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
            required
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label>Standard:</label>
          <input
            type="number"
            name="standard"
            value={student.standard}
            onChange={handleChange}
            placeholder='Enter Standard...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handleChange}
            placeholder='Enter DOB...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Father's Name:</label>
          <input
            type="text"
            name="father_name"
            value={student.father_name}
            onChange={handleChange}
            placeholder='Enter Father name...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Mother's Name:</label>
          <input
            type="text"
            name="mother_name"
            value={student.mother_name}
            onChange={handleChange}
            placeholder='Enter Mother name...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Caste:</label>
          <select
            name="caste"
            value={student.caste}
            onChange={handleChange}
            required
          >
            <option value="OC">OC</option>
            <option value="BC">BC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_Number"
            value={student.phone_Number}
            onChange={handleChange}
            placeholder='Enter Phone Number...'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label>Address:</label>
          <textarea
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder='Enter Adress...'
            required
          />
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
    </div>
  );
}
