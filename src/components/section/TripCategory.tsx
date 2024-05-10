/**
 * Component representing trip category selection.
 * Allows the user to choose between round trip, one way, and multi-city trips.
 */

export default function TripCategory() {
  return (
    <section className="section-container pt-5">
      {/* Trip category selection */}
      <div className="flex items-center justify-center pb-5 border-bottom">
        <div className="border border-borderColor text-xs md:text-sm font-bold flex rounded-sm">
          {/* Button for round trip */}
          <button className="px-2">Round Trip</button>
          {/* Button for one way trip */}
          <button className="bg-btnBgColor px-4 py-1 text-white">
            One Way
          </button>
          {/* Button for multi-city trip */}
          <button className="px-2">Multi City</button>
        </div>
      </div>
    </section>
  );
}
