import { mockBuses } from "../utils/mock-buses";

const BusCard = () => {
  return (
    <>
      {mockBuses.map((bus, index) => (
        <div key={index} className="d-inline-flex p-4">
          <h4>Buss {bus.busLine}</h4>
          <ul>
            {bus.stops.map((busStops, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {busStops}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default BusCard;
