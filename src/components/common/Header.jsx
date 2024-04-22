/* eslint-disable react/prop-types */
import { BiSpreadsheet } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineStarRate } from "react-icons/md";
import { PiNotePencilDuotone, PiNotebookFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  const NavItem = (props) => {
    return (
      <li className="overflow-hidden rounded-lg border shadow-lg">
        <a
          className={`flex items-center gap-2 px-4 py-2 text-white transition-all hover:border-teal-800 hover:bg-teal-800 hover:font-semibold hover:text-white ${
            location.pathname === props.href
              ? "border-teal-800 bg-teal-800 font-semibold"
              : "bg-teal-600"
          }`}
          href={props.href}
        >
          <div className="icon text-xl">{props.icon}</div>
          {props.title}
        </a>
      </li>
    );
  };

  return (
    <header
      className={`sticky left-0 top-0 flex w-full items-center justify-between border-b bg-[#28534e] px-6 py-5 shadow-xl xl:flex`}
    >
      <div className="container mx-auto flex items-center">
        <div className="mr-5 flex items-center gap-5 xl:mr-0 xl:hidden">
          <FaBars
            className="mt-1 text-2xl"
            onClick={() => props.setShowSidebar(!props.showSidebar)}
          />
        </div>
        <div className="left flex w-full flex-row justify-between gap-5">
          <div className="logo flex items-center justify-center gap-2 text-xl text-white">
            <GiNotebook className="text-4xl" />
            <div className="">
              <span className="font-[600]">Homework</span>{" "}
              <span className="font-[800] text-yellow-400">Grader</span>
            </div>
          </div>
          <nav
            className={`${props.showSidebar ? "fixed left-0 top-0 z-50 h-full w-[320px] bg-[#28534e] p-5 shadow-2xl xl:static" : "hidden xl:block"}`}
          >
            <ul
              className={`flex flex-row gap-5 ${props.showSidebar ? "mt-[50px] flex-col" : ""}`}
            >
              <NavItem
                title="Homework Submission"
                href="/"
                icon={<PiNotePencilDuotone />}
              />
              <NavItem
                title="Grade Submission"
                href="/grade-submission"
                icon={<MdOutlineStarRate />}
              />
              <NavItem
                title="Homework Analysis Sheet"
                href="/homework-sheet"
                icon={<BiSpreadsheet />}
              />
              <NavItem
                title="Grade Submission Sheet"
                href="/grade-sheet"
                icon={<PiNotebookFill />}
              />
            </ul>
            <div className="close absolute right-0 top-0 block p-5 xl:hidden">
              <CgCloseO
                className="text-4xl text-rose-600"
                onClick={() => props.setShowSidebar(!props.showSidebar)}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
