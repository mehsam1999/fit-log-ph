import Image from "next/image";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-700">
      <div className="navbar shadow-sm p-5">

        
        <div className="navbar-start">
          
          
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="bg-[#1A2312] text-[#C2F800] font-semibold rounded-4xl"><a>Workouts</a></li>
              <li className="font-semibold rounded-4xl"><a>My Plan</a></li>
            </ul>
          </div>

          
          <div className="flex gap-2 items-center">
            <Image src={Logo} alt="Logo" />
            <h2 className="[font-family:var(--font-oswald)] font-bold text-2xl text-center">FITLOG</h2>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="bg-[#1A2312] text-[#C2F800] font-semibold rounded-4xl"><a>Workouts</a></li>
            <li className="font-semibold rounded-4xl"><a>My Plan</a></li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <a className="btn">Plan</a>
          <a className="btn">Saved</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;