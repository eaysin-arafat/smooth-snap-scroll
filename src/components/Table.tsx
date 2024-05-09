type Props = {
  className?: string;
  header: {
    className?: string;
    data: {
      title: string | JSX.Element;
      w: string;
    }[];
  };
  children: React.ReactNode;
};

// Table component
const Table = ({ className, header, children }: Props) => {
  return (
    <div className="overflow-x-auto bg-whiteColor rounded-sm">
      <div className={`w-full ${className}`}>
        {/* table header */}
        <div
          className={`flex justify-between px-6 h-full py-[6px],
            ${header.className}`}
        >
          {/* HEADER TITLES */}
          {header.data?.map((item, index) => (
            <p
              className="p-2 py-2.5 text-textColor text-[12px] 2xl:text-[14px] font-semibold"
              key={index}
              style={{ width: item.w }}
            >
              {item?.title}
            </p>
          ))}
        </div>

        {/* table body */}
        {children}
      </div>
    </div>
  );
};

export default Table;
