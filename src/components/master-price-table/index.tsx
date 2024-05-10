import Table from "../table/Table";
import { FlightOffer, FlightOffersType } from "../../constant/fightType";
import FlightOfferRow from "./FlightOfferRow";

export default function MasterPriceTable({ data }: { data: FlightOffersType }) {
  const tableHeader = [
    { title: "Flight", w: "60px" },
    { title: "Aircraft", w: "60px" },
    { title: "Class", w: "50px" },
    { title: "Fare", w: "70px" },
    { title: "Route", w: "80px" },
    { title: "Departure", w: "150px" },
    { title: "Arrival", w: "150px" },
    {
      title: "",
      w: "40px",
    },
    { title: "Duration", w: "80px" },
    { title: "Price", w: "80px" },
  ];

  return (
    <>
      <p className="font-medium text-base pb-4">{data?.message}</p>

      <Table
        className="min-w-[1000px] "
        header={{
          data: tableHeader,
          className: "bg-tableHeaderColor rounded-sm py-1 uppercase text-",
        }}
      >
        {/* table body */}
        {data?.flightOffer?.map((item: FlightOffer, index: number) => (
          <FlightOfferRow
            index={index}
            itineraries={item}
            length={data?.flightOffer?.length}
          />
        ))}
      </Table>
    </>
  );
}
