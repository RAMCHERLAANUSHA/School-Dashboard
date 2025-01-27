import React from "react";
import styles from "./Timetable.module.css";

export default function Timetable(){
  const timetableData = [
    { time: "9:00 AM - 9:30 AM", period: "Prayer" },
    { time: "9:30 AM - 10:20 AM", period: "1st Period" },
    { time: "10:20 AM - 11:10 PM", period: "2nd Period" },
    { time: "11:10 AM - 11:20 PM", period: "Short Break" },
    { time: "11:20 PM - 12:10 PM", period: "3rd Period" },
    { time: "12:10 PM - 1:00 PM", period: "4th Period" },
    { time: "1:00 PM - 2:00 PM", period: "Lunch" },
    { time: "2:00 PM - 2:50 PM", period: "5th Period" },
    { time: "2:50 PM - 3:40 PM", period: "6th Period" },
    { time: "3:40 PM - 4:30 PM", period: "7th Period" },
  ];

  return (
    <div className={styles.timetableContainer}>
      <h2>Timetable</h2>
      <table className={styles.timetable}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
