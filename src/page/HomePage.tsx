import ErrorPage from "../components/error-page/ErrorPage";
import FilterFrom from "../components/forms/FilterFrom";
import Navbar from "../components/home/Navbar";
import TableSkeleton from "../components/loader/TableSkeleton";
import NotFound from "../components/not-found/NotFound";
import MasterPriceTable from "../components/master-price-table";
import { useFlightOffers } from "../hooks/useFightData";

export default function HomePage() {
  const { data, error, isLoading, fetchFlights } = useFlightOffers();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    fetchFlights();
  };

  return (
    <>
      <Navbar />

      <h1 className="section-container border-b border shadow-sm">
        Master Price
      </h1>

      <div className="section-container py-5 ">
        <div className="flex items-center justify-center pb-5">
          <div className="border border-borderColor text-xs font-bold flex rounded-sm">
            <button className="px-2">Round Trip</button>
            <button className="bg-btnBgColor px-4 py-1 text-white">
              One Way
            </button>
            <button className="px-2">Multy City</button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-divideColor"></div>

        {/* Filter Form */}
        <FilterFrom handleSubmit={handleSubmit} />

        {/* Table Section */}
        <>
          {error ? (
            <ErrorPage />
          ) : isLoading ? (
            <TableSkeleton />
          ) : data?.flightOffer?.length ? (
            <MasterPriceTable data={data} />
          ) : (
            <NotFound messages="Explore unique places to stay" />
          )}
        </>
      </div>
    </>
  );
}
