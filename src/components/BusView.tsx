import BusCard from "./BusCard";

const BusView = () => {
  const SL =
    "https://www.trafiklab.se/api/trafiklab-apis/sl/stops-and-lines-2/";

  return (
    <>
      <div className="mt-5">
        <h1>Topp 10 bussar med flest stopp i Stockholm</h1>
        <h5>Listan visar en enkeltur för busslinjen</h5>
        <p className="fst-italic">
          Information hämtat med hjälp av <a href={SL}>API från SL</a>
        </p>
        <BusCard />
      </div>
    </>
  );
};

export default BusView;
