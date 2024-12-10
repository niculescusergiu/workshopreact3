import React, { useState } from "react";

const ScheduleMeeting = ({ onAddMeeting }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [level, setLevel] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeeting({ id: Date.now(), title, date, time, level, participants, description });
    setTitle("");
    setDate("");
    setTime("");
    setLevel("");
    setParticipants("");
    setDescription("");
  };

  return (
    <div>
      <h5 className="mb-3 text-primary">Schedule a New Meeting</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Meeting Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <select
              className="form-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              <option value="Team">Team</option>
              <option value="Department">Department</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Participants (comma-separated emails)"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create Meeting
        </button>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
