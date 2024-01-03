import { mockBuses } from "../utils/mock-buses";

const BusCard = () => {
  return (
    <>
      {mockBuses.map((bus, index) => (
        <div key={index}>
          <h3>Buss {bus.busLine}</h3>
          <ul>
            {bus.stops.map((busStops, index) => (
              <li key={index}>{busStops}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default BusCard