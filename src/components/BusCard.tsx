import { useEffect, useState } from "react";
import { getTopBusLines } from "../api/BusApi";
import { mockBuses } from "../utils/mock-buses";
import { Modal } from "react-bootstrap";
import BusModal from "../BusModal";

interface IBus {
  busLine: number;
  stops: string[];
}

const BusCard = () => {
  // const [busLines, setBusLines] = useState<IBus[]>([]);
  // const [busStopsToShow, setBusStopsToShow] = useState(3);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => setShowModal(false);

  const showMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setShowModal(true);
  };

  /*   const showLess = () => {
    setBusStopsToShow(3);
  }; */

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
      <div className="d-flex flex-row flex-wrap justify-content-center p-4">
        {mockBuses.map((bus, index) => (
          <div key={index} className="p-4 m-4">
            <h4>Buss {bus.busLine}</h4>
            <p>Antal stopp: {bus.stops.length}</p>
            <button
              key={index}
              className="mt-4"
              onClick={() => showMore(index)}
            >
              Visa hållplatser
            </button>
            {expandedIndex === index && (
              <BusModal
                show={showModal}
                onHide={closeModal}
                title={"Buss " + bus.busLine}
                body={bus.stops}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BusCard;

/* {bus.stops.slice(0, busStopsToShow).map((busStops, idx) => (
  <li key={idx} style={{ listStyle: "none" }}>
    {index === expandedIndex ? <BusModal title={bus.busLine} body={busStops} /> : busStops}
  </li> */
