import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Create.css';
 
export default function Create() {
 const [form, setForm] = useState({
   title: "",
   location: "",
   description: "",
   status: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    console.log("newPerson~~~~:", newPerson);
    newPerson.status = "open";
    const newJob = { "username": "test", "data": newPerson};
   await fetch(`/createpost`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newJob),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ title: "", location: "", description: "", status: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="create-form-wrapper">
    <div className="loginForm">

    
     <h3>Create New Job Post</h3>
     <form onSubmit={onSubmit}>
        <label htmlFor="title">
          <p>Job title</p>
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </label>
        <label htmlFor="location">
          <p>Job location</p>
          <input
            type="text"
            id="location"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
        </label>
        <label htmlFor="description">
          <p>Job description</p>
          <input
            type="text"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </label>
        <div className="login-form-button-wrapper">
          <input
            type="submit"
            value="Submit"
          />
        </div>
     </form>
     </div>
   </div>
 );
}