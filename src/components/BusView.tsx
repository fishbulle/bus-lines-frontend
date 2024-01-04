import BusCard from "./BusCard";

const BusView = () => {
  return (
    <>
      <div className="mt-5">
        <h1>Topp 10 bussar med flest stopp i Stockholm</h1>
        <h6 className="fst-italic">
          Hämtat från SLs API Hållplatser och linjer 2
        </h6>
        <BusCard />
      </div>
    </>
  );
};

export default BusView;
