import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function Clock(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const timeID = setInterval(getTime, 1000);
    getTime();
    return () => {
      clearInterval(timeID);
    };
  }, []);
  function formatTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }
  function getTime() {
    const d = new Date();
    const h = formatTime(d.getHours());
    const m = formatTime(d.getMinutes());
    const s = formatTime(d.getSeconds());
    const date = formatTime(d.getDate());
    const month = formatTime(d.getMonth() + 1);
    const y = formatTime(d.getFullYear());
    setTime(h + ":" + m + ":" + s + " " + date + "-" + month + "-" + y);
  }
  return <> {time} </>;
}

export default Clock;
