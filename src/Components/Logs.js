import react from "react";
import { Link } from "react-router-dom";

export const Logs = (props) => {

  console.log(props.logs.length);
  return (
    <>
      {props.logs.map((log, index) => {
        let url = `/logs/${index}`;
        return (
          <>
            <Link to={url}>
              <p>{log.title}</p>
            </Link>
          </>
        );
      })}
    </>
  );
};
