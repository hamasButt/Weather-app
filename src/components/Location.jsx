export const Location = ({ names }) => {
  return (
    <>
      <div className="location-box">
        <div className="location">{names}</div>
        <div className="date">{dateBuilder()}</div>
      </div>
    </>
  );
};

const dateBuilder = () => {
  let d = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "june",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};
