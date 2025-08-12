import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Format date
  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // Blinking colon
  const showColon = time.getSeconds() % 2 === 0;

  // Format time
  let hours = time.getHours();
  const ampm = hours > 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Hour 0 should be 12
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-light">
        <span>
          {hours}:{minutes}
        </span>
        <span style={{ visibility: showColon ? "visible" : "hidden" }}>:</span>
        <span>
          {seconds} {ampm}
        </span>
      </div>
      <div className="text-3xl font-light mt-2">{formatDate(time)}</div>
    </div>
  );
};

export default Clock;
