import BusCard from "./BusCard";

const BusView = () => {
  const SL = import.meta.env.VITE_SL_API;

  return (
    <>
      <div className="container mt-5">
        <h1>Topp 10 bussar med flest stopp i Stockholm</h1>
        <h5>Listan visar en enkeltur för busslinjen</h5>
        <p className="fst-italic">
          Information hämtad med hjälp av <a href={SL}>API från SL</a>
        </p>
        <BusCard />
      </div>
    </>
  );
};

export default BusView;
