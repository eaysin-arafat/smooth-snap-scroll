/**
 * Props for the TableBody component.
 * @property {number} index - Index of the table row.
 * @property {string} [className] - Additional class name for styling.
 * @property {Object[]} data - Data for rendering each cell in the table row.
 * @property {string|number|JSX.Element} data.title - Content of each cell in the table row.
 * @property {string} data.w - Width of each cell in the table row.
 * @property {string} [data.ClassName] - Optional additional class name for styling individual cells.
 * @property {number} [length] - Total length of the table rows.
 */

// Table Body component props
type Props = {
  index: number;
  className?: string;
  data: {
    title: string | number | JSX.Element;
    w: string;
    ClassName?: string;
  }[];
  length?: number;
};

/**
 * TableBody component for rendering the body of the table.
 * @param {Props} props - Props for the TableBody component.
 * @returns {JSX.Element} TableBody component.
 */

// Table Body component
function TableBody({ data, index, className = "", length }: Props) {
  return (
    <div
      key={index}
      className={`flex justify-between items-center px-6 py-1.5 h-full border-b border-tableDivideColor 
        ${length === index + 1 && "border-none"} bg-whiteColor ${className} ${
        index % 2 === 0 ? "bg-tableRowColor" : "bg-tableRowOddColor"
      }`}
    >
      {/* BODY ITEM */}
      {data?.map((data, i) => (
        <div
          className={`p-2 py-0 text-textColor text-[11px] 2xl:text-[13px]  ${data?.ClassName}`}
          style={{ width: data.w }}
          key={i}
        >
          {/* TITLE */}
          <div className="text-[11px] 2xl:text-[13px] text-grayColor font-normal">
            {data?.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableBody;
