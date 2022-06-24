import React from "react";

export const Hour = props => {
  let hours = props.hour;
  if (props.twelveHours) {
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  return <span>{hours}</span>;
};

export const Minute = ({minutes}) => (
  <span>
    {minutes < 10 && "0"}
    {minutes}
  </span>
);

export const Second = ({seconds}) => (
  <span>
    {seconds < 10 && "0"}
    {seconds}
  </span>
);

export const Separator = ({separator}) => <span>{separator || ":"}</span>;

export const Ampm = ({hour}) => <span>{hour >= 12 ? "pm" : "am"}</span>;
