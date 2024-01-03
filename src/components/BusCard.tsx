import { useEffect, useState } from "react";
import { getTopBusLines } from "../api/BusApi";

interface IBus {
  busLine: number;
  stops: string[];
}

const BusCard = () => {
  const [busLines, setBusLines] = useState<IBus[]>([]);
  const [busStopsToShow, setBusStopsToShow] = useState(5);

  const showMore = () => {
    // do something to show the rest of the stops
    // modal?
  };

  const showLess = () => {
    setBusStopsToShow(5);
  };

  async function fetchBuses() {
    try {
      const response = await getTopBusLines();
      if (response?.status == 200) return response.data;
      else return [];
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  }

  useEffect(() => {
    fetchBuses().then((data) => setBusLines(data));
  }, []);

  return (
    <>
      {busLines.map((bus, index) => (
        <div key={index} className="d-inline-flex p-4">
          <h4>Buss {bus.busLine}</h4>
          <ul>
            {bus.stops.slice(0, busStopsToShow).map((busStops, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {busStops}
              </li>
            ))}
            {/* Add show more / less stops */}
          </ul>
          {busStopsToShow === 5 ? <button onClick={showMore}>Visa fler hållplatser</button> : null}
        </div>
      ))}
    </>
  );
};

export default BusCard;
