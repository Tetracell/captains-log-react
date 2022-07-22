import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Log = ({ API }) => {
  const [log, setLog] = useState({});
  const navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`).then((res) => {
      setLog(res.data);
    });
  }, [index, API]);

  const handleBackButton = () => {
    navigate(`/logs`);
  };

  const handleDeleteButton = () => {
    axios.delete(`${API}/logs/${index}`).then((res) => {
      console.log(index);
      navigate("/logs");
    });
  };

  return (
    <>
      <p>{log.captainName}</p>
      <p>{log.title}</p>
      <p>{log.post}</p>
      <p>{log.mistakesWereMadeToday}</p>
      <p>{log.daysSinceLastCrisis}</p>
      <button onClick={handleBackButton}>Back</button>
      <button onClick={handleDeleteButton}>Delete</button>
    </>
  );
};
