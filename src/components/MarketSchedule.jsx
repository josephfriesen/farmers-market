import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props) {
  const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];
let scheduleWrapper = {
  display: "flex"
}
let scheduleStyles = {
  width: "200px",
  height: "100%",
  border: "#e1e1e1 solid 1px"
}
  return (
    <div style={scheduleWrapper}>
      {marketSchedule.map((dayOfWeek, index) =>
        <div style={scheduleStyles} key={index}>
          <p>{dayOfWeek.day}</p>
          <p>{dayOfWeek.location}</p>
          <p>{dayOfWeek.hours}</p>
          <p>{dayOfWeek.booth}</p>
        </div>
      )}
    </div>
  )
}

export default MarketSchedule;
