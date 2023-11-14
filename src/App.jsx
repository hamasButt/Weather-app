import { useEffect, useState } from "react";
import { Location } from "./components/Location";
import { Tempreature } from "./components/Tempreature";
import Spinner from "./components/Spinner";

export default function App() {
  const [weathers, setWeathers] = useState("");
  const [query, setQuery] = useState("Rawalpindi");
  const [statusHandler, setStatusHandler] = useState("default");
  const { weather, name, main } = weathers;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchCity = (e) => {
    if (query === "") {
      return;
    }
    if (e.key === "Enter") {
      fetchData();
    }
  };
  const fetchData = async () => {
    setStatusHandler("loading");
    try {
      let resp = await fetch(
        `${import.meta.env.VITE_HOST}weather?q=${query}&units=metric&APPID=${
          import.meta.env.VITE_SECRET_KEY
        }`
      );
      let result = await resp.json();
      console.log({ result });
      setWeathers(result);
    } catch (err) {
      console.error(err, "error is");
      setStatusHandler("error");
    } finally {
      setStatusHandler("");
    }
  };
  function renderingWeather() {
    if (main == undefined) return;
    switch (statusHandler) {
      case "loading":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner width={100} height={100} />
          </div>
        );
      case "error":
        return (
          <div className="weather-box">
            Unable To Fetch Data Please Try Again.
          </div>
        );
      default:
        return (
          <>
            <Location names={name} />
            <Tempreature weatherStatus={weather} tempreature={main} />
          </>
        );
    }
  }
  return (
    <div className={"app"}>
      <main>
        <div className="search-box">
          <input
            onKeyDown={(e) => searchCity(e, "")}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="please type..."
            className="search-bar"
            type="text"
          />
        </div>
        {renderingWeather()}
      </main>
    </div>
  );
}
