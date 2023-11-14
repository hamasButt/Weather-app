export const Tempreature = ({ tempreature, weatherStatus }) => {
  return (
    <>
      <div className="weather-box">
        <div className="tempreature">{Math.round(tempreature.temp)}°C</div>
        <div className="weather">{weatherStatus[0].main}</div>
      </div>
    </>
  );
};
