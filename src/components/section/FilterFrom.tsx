import { FaPlus } from "react-icons/fa";

/**
 * FilterFrom component represents a form for filtering flight data.
 * It includes input fields for departure and arrival locations, date selection,
 * passenger count, and additional options.
 * @param handleSubmit Function to handle form submission
 */

export default function FilterFrom({
  handleSubmit,
}: {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <section className="section-container">
      <form action="">
        {/* Departure and arrival input fields */}
        <div className="grid md:grid-cols-5 lg:grid-flow-col gap-1.5 py-2.5 border-bottom">
          <input className="input-element" type="text" placeholder="LHR" />
          <input className="input-element" type="text" placeholder="CDG" />
          <input className="input-element" type="date" />

          {/* Select dropdowns for date, time, and passenger count */}
          <select className="input-element" name="" id="">
            <option>Day -</option>
          </select>
          <select className="border border-borderColor px-2 py-1" name="" id="">
            <option>Day -</option>
          </select>
          <select className="input-element" name="" id="">
            <option>Any Time</option>
          </select>
          <div className="flex items-center justify-center px-1">
            <FaPlus className="" size={12} />
          </div>
          <select className="input-element" name="" id="">
            <option>ADT</option>
          </select>
          <select className="input-element" name="" id="">
            <option>1</option>
          </select>
          <div className="flex items-center justify-center px-1">
            <FaPlus className="" size={12} />
          </div>
        </div>

        {/* Additional options and search button */}
        <div className="grid md:grid-flow-col md:justify-between gap-2 py-2.5 border-bottom">
          {/* Checkbox for extra options */}
          <div className="flex items-center gap-2">
            <input className="" type="checkbox" />
            <label htmlFor="" className="text-sm font-semibold">
              Extra Options
            </label>
          </div>

          {/* Radio buttons for environment selection */}
          <div className="flex items-center justify-start md:justify-center gap-2 text-sm font-semibold">
            <p>Environment</p>
            <div className="flex items-center gap-1.5">
              <input type="radio" />
              <label htmlFor="">Dummy</label>
            </div>
            <div className="flex items-center gap-1.5">
              <input type="radio" />
              <label htmlFor="">PDT</label>
            </div>
          </div>

          {/* Button to submit the form */}
          <button className="main-btn" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
