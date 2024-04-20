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
      <li className="border-b">
        <a
          className={`flex w-full items-center gap-2 px-4 py-3 transition-all hover:bg-[#c64bf8] hover:font-semibold hover:text-white ${
            location.pathname === props.href
              ? "bg-[#c64bf8] font-semibold text-white"
              : ""
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
      className={`w-[300px] flex-col justify-between bg-white shadow-xl xl:flex ${props.showSidebar ? "fixed z-50 h-full shadow-2xl xl:static" : "hidden"}`}
    >
      <div className="top flex flex-col">
        <div className="logo flex flex-col items-center justify-center gap-2 bg-indigo-100 py-8 text-xl">
          <GiNotebook className="text-5xl text-slate-600" />
          <div className="">
            <span className="font-[600]">Homework</span>{" "}
            <span className="font-[800] text-[#6151fb]">Grader</span>
          </div>
        </div>
        <hr className="border-4 border-gray-300" />
        <nav>
          <ul className="flex flex-col">
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
