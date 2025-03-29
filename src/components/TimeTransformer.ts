import React from "react";

const TimeTransformer = (dt: number, timezone?: number) => {
  const localTimestamp = timezone ? (dt + timezone) * 1000 : dt * 1000;
  const date = new Date(localTimestamp);

  return date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export default TimeTransformer;

export const renderWeekend = (dt: number, timezone: number) => {
  const localTimestamp = (dt + timezone) * 1000;
  const date = new Date(localTimestamp);

  return date.toLocaleDateString("en-GB", {
    weekday: "long",
  });
};
