import React from "react";

const MeetingList = ({ meetings, onDeleteMeeting }) => {
  return (
    <div>
      <h4 className="mt-5">List of Created Meetings</h4>
      {meetings.length === 0 ? (
        <p>No meetings scheduled yet.</p>
      ) : (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Meeting Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, index) => (
              <tr key={meeting.id}>
                <td>{index + 1}</td>
                <td>{meeting.title}</td>
                <td>{meeting.date}</td>
                <td>{meeting.time}</td>
                <td>{meeting.level}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => alert("Edit functionality coming soon!")}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteMeeting(meeting.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MeetingList;
