import react from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export const Logs = (props) => {
// Todo:
// Move the server fetch to here with a useeffect to possible help with
// refreshing the state when adding / deleting a log?

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
