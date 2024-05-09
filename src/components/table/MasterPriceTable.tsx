import Table from "../Table";
import TableBody from "../TableBody";
import { FlightOffer, FlightOffersType } from "../../constant/fightType";
import { CgBorderStyleDashed } from "react-icons/cg";

export default function MasterPriceTable({ data }: { data: FlightOffersType }) {
  return (
    <>
      <p className="font-medium text-base pb-4">Data parsed successfully</p>

      <Table
        className="min-w-[1000px] "
        header={{
          data: [
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
          ],
          className: "bg-tableHeaderColor rounded-sm py-1 uppercase text-",
        }}
      >
        {data?.flightOffer?.map((item: FlightOffer, index) => (
          <div className="relative">
            <TableBody
              key={index}
              index={index}
              length={data?.flightOffer?.length}
              data={[
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) =>
                        itinerarie?.segments.map((segment, index) => (
                          <p key={index}>{segment.aircraft}</p>
                        ))
                      )}
                    </>
                  ),
                  w: "60px",
                },
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) =>
                        itinerarie?.segments?.map((segment, index) => (
                          <p key={index}>{segment.flightNumber}</p>
                        ))
                      )}
                    </>
                  ),
                  w: "60px",
                },
                {
                  title: (
                    <>
                      {item.class[0].map((seat, index) => (
                        <p key={index}>{seat}</p>
                      ))}
                    </>
                  ),
                  w: "50px",
                },
                {
                  title: (
                    <>
                      {item.fareBasis[0].map((fare, index) => (
                        <p key={index}>{fare}</p>
                      ))}
                    </>
                  ),
                  w: "70px",
                },
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) =>
                        itinerarie?.segments?.map((segment, index) => (
                          <p className="flex" key={index}>
                            {segment.departure?.iataCode} -{" "}
                            {segment.arrival?.iataCode}
                          </p>
                        ))
                      )}
                    </>
                  ),
                  w: "80px",
                },
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) =>
                        itinerarie?.segments?.map((segment, index) => (
                          <p className="flex" key={index}>
                            {segment.departure?.at}
                          </p>
                        ))
                      )}
                    </>
                  ),
                  w: "150px",
                },
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) =>
                        itinerarie?.segments?.map((segment, index) => (
                          <p className="flex" key={index}>
                            {segment.arrival?.at}
                          </p>
                        ))
                      )}
                    </>
                  ),
                  w: "150px",
                },
                {
                  title: <CgBorderStyleDashed />,
                  w: "40px",
                },
                {
                  title: (
                    <>
                      {item.itineraries?.map((itinerarie) => (
                        <p>{itinerarie?.duration}</p>
                      ))}
                    </>
                  ),
                  w: "80px",
                },
                {
                  title: (
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium">{item.price}</p>
                      <button className="main-btn py-1 text-xs">Select</button>
                    </div>
                  ),
                  w: "80px",
                },
              ]}
            />

            {item?.itineraries[0].segments?.length === 2 && (
              <div className="h-[1px] bg-red-200 absolute bottom-1.5 w-[calc(100%-105px)]"></div>
            )}
          </div>
        ))}
      </Table>
    </>
  );
}
