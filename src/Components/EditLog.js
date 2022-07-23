import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditLog = ({ API }) => {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`).then((res) => {
      setLog(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };
  const handleMistake = () => {
    setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  };
  const handleLog = (event) => {
    event.preventDefault();
    putLog();
  };

  const putLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {setLog(res.data)})
      .then((res) => navigate(`/logs/${index}`))
  };
  return (
    <div className="editLog">
      <form onSubmit={handleLog}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleChange}
          placeholder="Please sign your log"
          required
        />
        <label htmlFor="title">Log Title :</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleChange}
          placeholder="Entry Title"
          required
        />
        <label htmlFor="post">Entry :</label>
        <input
          id="post"
          value={log.post}
          type="text"
          onChange={handleChange}
          placeholder="Log Entry"
          required
        />
        <label htmlFor="mistakesWereMadeToday">MISTAKES :</label>
        <input
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          onChange={handleMistake}
          type="checkbox"
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days since last crisis : </label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleChange}
          placeholder="Days"
          required
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};
