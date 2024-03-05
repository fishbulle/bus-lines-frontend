import { useEffect, useState } from 'react';
import { getTopBusLines } from '../api/BusApi';
import { BusModal } from './BusModal';
import { messages } from '../utils/messages';

interface IBus {
  busLineNumber: number;
  stops: string[];
}

export const BusCard = () => {
  const [buses, setBuses] = useState<IBus[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => setShowModal(false);

  const showMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setShowModal(true);
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
    fetchBuses().then((data) => setBuses(data));
  }, []);

  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center mt-5'>
        {buses.map((bus, index) => (
          <div key={index} className='p-4 m-4'>
            <h4>{messages.bus.title + bus.busLineNumber}</h4>
            <p>{messages.bus.numOfStops + bus.stops.length}</p>
            <button
              key={index}
              className='mt-3 px-3'
              onClick={() => showMore(index)}
            >
              {messages.bus.showStops}
            </button>
            {expandedIndex === index && (
              <BusModal
                show={showModal}
                onHide={closeModal}
                title={messages.bus.title + bus.busLineNumber}
                header={messages.bus.header}
                body={bus.stops}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
