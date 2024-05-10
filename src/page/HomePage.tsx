import FilterFrom from "../components/section/FilterFrom";
import NotFound from "../components/not-found/NotFound";
import tripData from "../../data/data.json";
import { useState } from "react";
import RootLayout from "../layout/RootLayout";
import { FlightOffersType } from "../constant/fightType";
import Heading from "../components/section/Heading";
import TripCategory from "../components/section/TripCategory";
import MasterPriceTable from "../components/section/flight-table";

export default function HomePage() {
  // State to hold flight data
  const [data, setData] = useState<FlightOffersType | null>(null);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Simulate data fetching (replace with actual API call)
    setData(tripData);
  };

  return (
    <RootLayout>
      {/* Page Heading */}
      <Heading />

      {/* Trip Category */}
      <TripCategory />

      {/* Filter Form */}
      <FilterFrom handleSubmit={handleSubmit} />

      {/* Table Section */}
      {data ? (
        <MasterPriceTable data={data} />
      ) : (
        <NotFound messages="Explore unique places to stay" />
      )}
    </RootLayout>
  );
}
