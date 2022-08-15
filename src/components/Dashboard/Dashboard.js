import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Dashboard.css';
//import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.title}</td>
    <td>{props.record.location}</td>
    <td>{props.record.description}</td>
    <td>{props.record.date}</td>
    <td>{props.record.status}</td>
  </tr>
);

export default function Dashboard() {
  const [records, setRecords] = useState([]);
 
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      //const response = await fetch(`http://localhost:5000/record/`);
      const msg = {"username": "test1"};
      const response = await fetch(`/getpostlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(msg),
        mode: 'cors'
      });
      //console.log("responseJson~~~~:",response);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const recordsJSON = await response.json();
      const records = recordsJSON.data;
      console.log("records~~~~:",records);
      setRecords(records);
    }
  
    getRecords();
  
    return;
  }, [records.length]);
  
  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
        />
      );
    });
  }

  return(
    <div>
      <h2>Dashboard</h2>
      <div>
        <nav>
          <NavLink className="nav-link" to="/create">
            Create Job Post
          </NavLink>
        </nav>
      </div>
      <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
            <th>Job Title</th>
            <th>Job Location</th>
            <th>Job Description</th>
            <th>Date</th>
            <th>Status</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}