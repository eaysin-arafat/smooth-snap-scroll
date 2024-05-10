import { CgBorderStyleDashed } from "react-icons/cg";
import { FlightOffer, Itinerary, Segment } from "../../../constant/fightType";
import TableBody from "../../table/TableBody";

/**
 * TableRow component represents a single row in the flight offer table.
 * It displays information about the flight itinerary, including segments, flight numbers, seats, fares, routes, departures, arrivals, duration, and price.
 * @param itineraries FlightOffer containing itinerary data
 * @param index Index of the row
 * @param length Total number of rows
 */

export default function TableRow({
  itineraries,
  index,
  length,
}: {
  itineraries: FlightOffer;
  index: number;
  length?: number;
}) {
  // Function to render segments information
  const renderSegments = (itineraries: Itinerary[]) => {
    // Render each segment's aircraft
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p key={index}>{segment.aircraft}</p>
          ))
        )}
      </>
    );
  };

  // Function to render flight numbers
  const renderFlightNumbers = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p key={index}>{segment.flightNumber}</p>
          ))
        )}
      </>
    );
  };

  // Function to render seats information
  const renderSeats = (classes: string[]) => {
    return (
      <>
        {classes.map((seat: string, index: number) => (
          <p key={index}>{seat}</p>
        ))}
      </>
    );
  };

  // Function to render fares information
  const renderFares = (fareBasis: string[]) => {
    return (
      <>
        {fareBasis.map((fare: string, index: number) => (
          <p key={index}>{fare}</p>
        ))}
      </>
    );
  };

  // Function to render routes information
  const renderRoutes = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p key={index}>
              {segment.departure?.iataCode} - {segment.arrival?.iataCode}
            </p>
          ))
        )}
      </>
    );
  };

  // Function to render departures information
  const renderDepartures = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p key={index}>{segment.departure?.at}</p>
          ))
        )}
      </>
    );
  };

  // Function to render arrivals information
  const renderArrivals = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p key={index}>{segment.arrival?.at}</p>
          ))
        )}
      </>
    );
  };

  // Check if the length of segments is two
  const isLengthTwo = itineraries?.itineraries?.[0].segments?.length === 2;

  return (
    <div key={index} className="relative">
      {/* TableBody component for rendering row data */}
      <TableBody
        key={index}
        index={index}
        length={length}
        data={[
          // Render each column data
          { title: renderSegments(itineraries?.itineraries || ""), w: "60px" },
          {
            title: renderFlightNumbers(itineraries?.itineraries || ""),
            w: "60px",
          },
          { title: renderSeats(itineraries?.class[0] || ""), w: "50px" },
          { title: renderFares(itineraries?.fareBasis[0] || ""), w: "70px" },
          { title: renderRoutes(itineraries?.itineraries || ""), w: "80px" },
          {
            title: renderDepartures(itineraries?.itineraries || ""),
            w: "150px",
          },
          {
            title: renderArrivals(itineraries?.itineraries || ""),
            w: "150px",
          },
          { title: <CgBorderStyleDashed />, w: "40px" },
          {
            title: <p>{itineraries?.itineraries?.[0]?.duration}</p>,
            w: "80px",
          },
          {
            // Render price with select button
            title: (
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">{itineraries?.price}</p>
                <button className="main-btn py-1 text-xs">Select</button>
              </div>
            ),
            w: "80px",
          },
        ]}
      />

      {/* Render dashed line if the length is two */}
      {isLengthTwo && (
        <div className="h-[1px] bg-red-200 absolute bottom-1.5 w-[calc(100%-105px)]"></div>
      )}
    </div>
  );
}
