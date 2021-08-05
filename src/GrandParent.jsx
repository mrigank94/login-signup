import { useEffect, useState } from "react";

const DateComponent = () => {
  const getFormattedDate = (date) =>
    date.toLocaleDateString() + " " + date.toLocaleTimeString();

  const [date, setDate] = useState(getFormattedDate(new Date()));

  useEffect(() => {
    setTimeout(() => {
      setDate(getFormattedDate(new Date()));
    }, 1000);
  }, [date]);

  return <div>{date}</div>;
};

export default DateComponent;
