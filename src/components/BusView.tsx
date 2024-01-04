import BusCard from "./BusCard";

const BusView = () => {
  return (
    <>
      <div>
        <h1 className="mt-4">Topp 10 bussar med flest stopp i Stockholm</h1>
        <h6 className="fst-italic">
          Hämtat från SLs API Hållplatser och linjer 2
        </h6>
      </div>
      <BusCard />
    </>
  );
};

export default BusView;
