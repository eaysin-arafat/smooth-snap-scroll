// Table Body data Type
type Data = {
  title: string | number | JSX.Element;
  w: string;
  ClassName?: string;
};

// Table Body component props
type TableBodyPropType = {
  index: number;
  className?: string;
  data: Data[];
  length?: number;
};

// Table Body component
function TableBody({ data, index, className = "", length }: TableBodyPropType) {
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
