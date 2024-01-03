import { useEffect, useState } from "react";
import { getTopBusLines } from "../api/BusApi";
import { mockBuses } from "../utils/mock-buses";

interface IBus {
  busLine: number;
  stops: string[];
}

const BusCard = () => {
  const [busLines, setBusLines] = useState<IBus[]>([]);
  const [busStopsToShow, setBusStopsToShow] = useState(3);

  const showMore = () => {
    // do something to show the rest of the stops
    // modal?
    setBusStopsToShow(mockBuses.length);
  };

  const showLess = () => {
    setBusStopsToShow(3);
  };

  /*   async function fetchBuses() {
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
  }, []); */

  return (
    <>
      {mockBuses.map((bus, index) => (
        <div key={index} className="d-inline-flex p-4">
          <h4>Buss {bus.busLine}</h4>
          <ul>
            {bus.stops.slice(0, busStopsToShow).map((busStops, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {busStops}
              </li>
            ))}
            {busStopsToShow === 3 ? (
              <button key={index} onClick={showMore}>
                Visa fler hållplatser
              </button>
            ) : (
              <button onClick={showLess}>Visa färre hållplatser</button>
            )}
          </ul>
        </div>
      ))}
    </>
  );
};

export default BusCard;
