import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import "./App.css";

function App() {
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Project Kickoff", date: "2024-05-15", time: "10:00 AM", level: "Team" },
    { id: 2, title: "Quarterly Review", date: "2024-06-01", time: "02:00 PM", level: "Department" },
  ]);

  const addMeeting = (newMeeting) => setMeetings((prev) => [...prev, newMeeting]);

  const deleteMeeting = (id) => setMeetings((prev) => prev.filter((meeting) => meeting.id !== id));

  return (
    <div className="app-container">
      <Sidebar />
      <MainContent meetings={meetings} onAddMeeting={addMeeting} onDeleteMeeting={deleteMeeting} />
    </div>
  );
}

export default App;

