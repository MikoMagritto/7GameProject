import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css";

const SevenGameCalendar = (props) => {

  const [value, onChange] = useState(new Date());

  return (
    <div id="calendar">
      <h2>Calendar</h2>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default SevenGameCalendar;
