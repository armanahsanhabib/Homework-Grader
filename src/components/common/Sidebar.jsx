/* eslint-disable react/prop-types */
import { BiSpreadsheet } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineStarRate } from "react-icons/md";
import { PiNotePencilDuotone, PiNotebookFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();

  const NavItem = (props) => {
    return (
      <li className="mx-5 overflow-hidden rounded-lg border shadow-lg">
        <a
          className={`flex w-full items-center gap-2 px-4 py-3 text-white transition-all hover:border-orange-500 hover:bg-orange-500 hover:font-semibold hover:text-white ${
            location.pathname === props.href
              ? "border-orange-500 bg-orange-400 font-semibold"
              : "bg-[#1e1d3d]"
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
    <div
      className={`w-[320px] flex-col justify-between bg-[#2b2a52] shadow-xl xl:flex ${props.showSidebar ? "fixed z-50 h-full shadow-2xl xl:static" : "hidden"}`}
    >
      <div className="top flex flex-col gap-5">
        <div className="logo flex flex-col items-center justify-center gap-2 bg-[#1e1d3d] py-8 text-xl text-white">
          <GiNotebook className="text-4xl" />
          <div className="">
            <span className="font-[600]">Homework</span>{" "}
            <span className="font-[800] text-yellow-400">Grader</span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-5">
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
        </nav>
      </div>
      <div className="close absolute right-0 top-0 block p-5 xl:hidden">
        <CgCloseO
          className="text-4xl text-rose-600"
          onClick={() => props.setShowSidebar(!props.showSidebar)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
