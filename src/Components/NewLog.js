import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewLog = ({ API }) => {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });

  const postLog = () => {
    axios.post(`${API}/logs`, newLog)
    .then((res) => navigate("/logs"))
    .then(console.log(newLog));
  };

  const navigate = useNavigate();
  const handleChange = (event) => {
    setNewLog({ ...newLog, [event.target.id]: event.target.value });
  };
  const handleMistake = () => {
    setNewLog({
      ...newLog,
      mistakesWereMadeToday: !newLog.mistakesWereMadeToday,
    });
  };
  const handleLog = (event) => {
    event.preventDefault();
    postLog();
  };

  return (
    <div className="newLog">
      <form onSubmit={handleLog}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={newLog.captainName}
          type="text"
          onChange={handleChange}
          placeholder="Please sign your log"
          required
        />
        <label htmlFor="title">Log Title :</label>
        <input
          id="title"
          value={newLog.title}
          type="text"
          onChange={handleChange}
          placeholder="Entry Title"
          required
        />
        <label htmlFor="post">Entry :</label>
        <input
          id="post"
          value={newLog.post}
          type="text"
          onChange={handleChange}
          placeholder="Log Entry"
          required
        />
        <label htmlFor="mistakesWereMadeToday">MISTAKES :</label>
        <input
          id="mistakesWereMadeToday"
          value={newLog.mistakesWereMadeToday}
          onChange={handleMistake}
          type="checkbox"
          checked={newLog.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days since last crisis : </label>
        <input
          id="daysSinceLastCrisis"
          value={newLog.daysSinceLastCrisis}
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
