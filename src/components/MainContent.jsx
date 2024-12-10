import React from "react";
import ScheduleMeeting from "./ScheduleMeeting.jsx";
import MeetingList from "./MeetingList.jsx";
import "./MainContent.css";

const MainContent = ({ meetings, onAddMeeting, onDeleteMeeting }) => {
  return (
    <div className="main-content p-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <ScheduleMeeting onAddMeeting={onAddMeeting} />
          <MeetingList meetings={meetings} onDeleteMeeting={onDeleteMeeting} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
