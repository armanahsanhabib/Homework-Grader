/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa6";

const Header = (props) => {
  return (
    <header className="mb-2 flex items-center justify-between border-b p-3">
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
