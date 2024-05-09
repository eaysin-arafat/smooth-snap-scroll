type Props = {
  messages?: string;
  className?: string;
};

// error page
function ErrorPage({
  messages = "Something Went Wrong",
  className = "",
}: Props) {
  return (
    <div
      className={`flex justify-center text-lg 2xl:text-xl items-center w-full p-3 h-32 bg-whiteColor rounded-lg ${className}`}
    >
      <h3 className="text-redColor">{messages}</h3>
    </div>
  );
}

export default ErrorPage;
