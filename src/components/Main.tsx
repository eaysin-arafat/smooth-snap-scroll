import { useFlightOffers } from "../hooks/useFightData"; // Assuming typo is corrected
import TableSkeleton from "./core/TableSkeleton";
import ErrorPage from "./error-page/ErrorPage";
import NotFound from "./not-found/NotFound";
import FilterFrom from "./forms/FilterFrom";
import MasterPriceTable from "./table/MasterPriceTable";
import React from "react";

export default function Main() {
  const { data, error, isLoading, fetchFlights } = useFlightOffers();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent default form submission behavior
    fetchFlights(); // Call the fetchFlights function to data fetching
  };

  return (
    <div className="py-5">
      {/* Top Button Group */}
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
          <NotFound />
        )}
      </>
    </div>
  );
}
