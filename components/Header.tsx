import { ReactElement } from "react";

const Header: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-header">
      <div className="container h-screen w-full flex justify-center items-center">
        <div
          className="backdrop-filter backdrop-blur-md border-white h-5/6 w-2/5 rounded-md shadow-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderWidth: "1px",
          }}
        >
          <button className="px-10 py-2 mt-10 ml-10 neumorphism text-base">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
