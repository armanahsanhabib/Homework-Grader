/* eslint-disable react/prop-types */
import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdOutlineStarRate } from "react-icons/md";
import { PiNotePencilDuotone } from "react-icons/pi";
import { VscNotebook } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const NavItem = (props) => {
    return (
      <li>
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
    <div className="flex w-[300px] flex-col justify-between py-5 shadow-xl">
      <div className="top flex flex-col gap-8">
        <div className="logo mt-5 flex items-center justify-center gap-2 text-xl">
          <VscNotebook className="text-2xl" />
          <span className="font-[600]">Homework</span>
          <span className="font-[800] text-[#6151fb]">Grader</span>
        </div>
        <nav>
          <ul className="flex flex-col gap-3">
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
              title="Result Sheet"
              href="/result-sheet"
              icon={<BiSolidSpreadsheet />}
            />
          </ul>
        </nav>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
