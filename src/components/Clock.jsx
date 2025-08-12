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

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-light">{formatTime(time)}</div>
      <div className="text-3xl font-light mt-2">{formatDate(time)}</div>
    </div>
  );
};

export default Clock;
