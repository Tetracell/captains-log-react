import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import Nav from "./Components/Nav";
import { Home } from "./Components/Home";
import { NewLog } from "./Components/NewLog";
import { Logs } from "./Components/Logs";
import { Log } from "./Components/Log";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs logs={logs} />} />
          <Route path="/logs/new" element={<NewLog API={API}/>} />
          <Route path="/logs/:index" element={<Log API={API}/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
