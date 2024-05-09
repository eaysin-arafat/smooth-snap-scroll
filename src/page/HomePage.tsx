import Main from "../components/Main";
import Navbar from "../components/home/Navbar";
import BodyLayout from "../layout/BodyLayout";

export default function HomePage() {
  return (
    <>
      <BodyLayout className="bg-navBgColor">
        <Navbar />
      </BodyLayout>

      <div className="">
        <h1 className="px-3 2xl:px-64 border-b border shadow-sm">
          Master Price
        </h1>
      </div>

      <BodyLayout>
        <Main />
      </BodyLayout>
    </>
  );
}
