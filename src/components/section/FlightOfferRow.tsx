import TableBody from "../table/TableBody";
import { CgBorderStyleDashed } from "react-icons/cg";
import { FlightOffer, Itinerary, Segment } from "../../constant/fightType";

export default function FlightOfferRow({
  itineraries,
  index,
  length,
}: {
  itineraries: FlightOffer;
  index: number;
  length?: number;
}) {
  const renderSegments = (itineraries: Itinerary[]) => {
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

  const renderSeats = (classes: string[]) => {
    return (
      <>
        {classes.map((seat: string, index: number) => (
          <p key={index}>{seat}</p>
        ))}
      </>
    );
  };

  const renderFares = (fareBasis: string[]) => {
    return (
      <>
        {fareBasis.map((fare: string, index: number) => (
          <p key={index}>{fare}</p>
        ))}
      </>
    );
  };

  const renderRoutes = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p className="flex" key={index}>
              {segment.departure?.iataCode} - {segment.arrival?.iataCode}
            </p>
          ))
        )}
      </>
    );
  };

  const renderDepartures = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p className="flex" key={index}>
              {segment.departure?.at}
            </p>
          ))
        )}
      </>
    );
  };

  const renderArrivals = (itineraries: Itinerary[]) => {
    return (
      <>
        {itineraries.map((itinerary: Itinerary) =>
          itinerary.segments.map((segment: Segment, index: number) => (
            <p className="flex" key={index}>
              {segment.arrival?.at}
            </p>
          ))
        )}
      </>
    );
  };

  const isLengthTwo = itineraries?.itineraries?.[0].segments?.length === 2;

  return (
    <div key={index} className="relative">
      <TableBody
        key={index}
        index={index}
        length={length}
        data={[
          {
            title: renderSegments(itineraries?.itineraries || ""),
            w: "60px",
          },
          {
            title: renderFlightNumbers(itineraries?.itineraries || ""),
            w: "60px",
          },
          {
            title: renderSeats(itineraries?.class[0] || ""),
            w: "50px",
          },
          {
            title: renderFares(itineraries?.fareBasis[0] || ""),
            w: "70px",
          },
          {
            title: renderRoutes(itineraries?.itineraries || ""),
            w: "80px",
          },
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

      {isLengthTwo && (
        <div className="h-[1px] bg-red-200 absolute bottom-1.5 w-[calc(100%-105px)]"></div>
      )}
    </div>
  );
}
