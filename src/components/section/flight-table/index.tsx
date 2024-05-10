import { FlightOffer, FlightOffersType } from "../../../constant/fightType";
import Table from "../../table/Table";
import TableRow from "./TableRow";

/**
 * MasterPriceTable component displays flight offers in a table format.
 * @param data FlightOffersType containing flight offer data
 */

export default function MasterPriceTable({ data }: { data: FlightOffersType }) {
  // Table header data
  const tableHeader = [
    { title: "Flight", w: "60px" },
    { title: "Aircraft", w: "60px" },
    { title: "Class", w: "50px" },
    { title: "Fare", w: "70px" },
    { title: "Route", w: "80px" },
    { title: "Departure", w: "150px" },
    { title: "Arrival", w: "150px" },
    { title: "", w: "40px" },
    { title: "Duration", w: "80px" },
    { title: "Price", w: "80px" },
  ];

  return (
    <section className="section-container">
      {/* Message from fetch data */}
      <p className="font-medium text-base pb-4">{data?.message}</p>

      {/* Flight table */}
      <Table
        className="min-w-[1000px]"
        header={{
          data: tableHeader,
          className: "bg-tableHeaderColor rounded-sm py-1 uppercase text-",
        }}
      >
        {/* Table body */}
        {data?.flightOffer?.map((item: FlightOffer, index: number) => (
          <TableRow
            index={index}
            itineraries={item}
            length={data?.flightOffer?.length}
            key={index}
          />
        ))}
      </Table>
    </section>
  );
}
