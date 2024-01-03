import { useState } from "react";
import { mockBuses } from "../utils/mock-buses";

interface IBus {
    busLine: number,
    stops: string[]
}

const BusCard = () => {
    const [busLines, setBusLines] = useState<IBus[]>([]);


  return (
    <>
      {busLines.map((bus, index) => (
        <div key={index} className="d-inline-flex p-4">
          <h4>Buss {bus.busLine}</h4>
          <ul>
            {bus.stops.map((busStops, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {busStops}
              </li>
            ))}
            {/* Add show more / less stops */}
          </ul>
        </div>
      ))}
    </>
  );
};

export default BusCard;
