/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa6";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between border-b bg-[#dae3f2] px-6 py-5 shadow">
      <div className="left flex items-center gap-5">
        <FaBars
          className="mt-1 text-2xl xl:hidden"
          onClick={() => props.setShowSidebar(!props.showSidebar)}
        />
        <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
      </div>
    </header>
  );
};

export default Header;
