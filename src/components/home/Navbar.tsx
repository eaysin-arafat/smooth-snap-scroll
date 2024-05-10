import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import profileImg from "/apu.webp"; // Assuming profileImg is an image path

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleMobileNav = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <nav className="section-container w-full bg-navBgColor z-10">
      {/* Desktop Navbar */}
      <div className="flex md:flex-row-reverse items-center justify-between w-full py-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden h-8 w-8 border border-borderColor">
            <img
              className="flex items-center justify-center object-cover"
              src={profileImg}
              alt="profile picture"
              width={30}
            />
          </div>
          <GrNotification className="text-navTextColor" size={25} />
        </div>
        <div className="hidden md:flex text-navTextColor text-base gap-9 font-semibold">
          <a href="/">Dashboard</a> {/* Use href for anchors */}
          <a href="/">Master Price</a>
          <a href="/">Custom Price</a>
          <a href="/">Calendar</a>
          <a href="/">Reports</a>
        </div>
        <button onClick={handleMobileNav} className="md:hidden">
          <AiOutlineMenu className="text-white" size="2rem" />
        </button>
      </div>

      {/* Mobile Side Navbar */}
      <div className="md:hidden z-10">
        <div
          className={`${
            isOpenSidebar ? "fixed left-0 top-0 w-full h-screen" : ""
          }`}
        >
          <div
            className={`${
              isOpenSidebar
                ? "fixed left-0 top-0 w-full h-screen bg-navBgColor p-10 ease-in duration-300"
                : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-300"
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <button
                onClick={handleMobileNav}
                className="rounded bg-navBgColor shadow-md p-3 cursor-pointer"
              >
                <AiOutlineClose className="text-white" />
              </button>
            </div>
            <div className="flex flex-col space-y-5 pt-4 text-navTextColor text-base font-semibold">
              <a href="/">Dashboard</a>
              <a href="/">Master Price</a>
              <a href="/">Custom Price</a>
              <a href="/">Calendar</a>
              <a href="/">Reports</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
