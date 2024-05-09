export default function BodyLayout({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) {
  return <div className={`px-3 2xl:px-64 ${className}`}>{children}</div>;
}
