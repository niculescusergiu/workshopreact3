import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const MeetingForm = ({ onAddMeeting }) => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onSubmit = (data) => {
    const meeting = {
      id: uuidv4(),
      title: data.title,
      date: date.toISOString().split("T")[0],
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      level: data.level,
      participants: data.participants.split(","),
      description: data.description,
    };

    onAddMeeting(meeting);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          {...register("title", { required: true })}
          className="form-control"
          placeholder="Enter meeting title"
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            selected={time}
            onChange={(time) => setTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3">
        <select {...register("level")} className="form-select">
          <option value="">Choose level</option>
          <option value="Team">Team</option>
          <option value="Department">Department</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          {...register("participants")}
          className="form-control"
          placeholder="Enter participant emails"
        />
      </div>
      <div className="mb-3">
        <textarea
          {...register("description")}
          className="form-control"
          placeholder="Enter meeting description"
        ></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        <i className="fas fa-plus-circle me-2"></i>Create Meeting
      </button>
    </form>
  );
};

export default MeetingForm;

