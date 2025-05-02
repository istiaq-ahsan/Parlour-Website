import { NavLink, Link } from "react-router-dom";
import { Menu, X, LogOut, Settings } from "lucide-react";


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="bg-white flex items-center justify-between md:hidden px-4 py-3 shadow-sm sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={} alt="Logo" className="h-8 w-8" /> */}
          <span className="font-bold text-lg">Jerin's Parlour</span>
        </Link>
        <button onClick={toggleSidebar} className="text-gray-700">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-30 md:fixed flex flex-col mt-[64px] md:mt-0 justify-between overflow-x-hidden w-64 space-y-6 px-4 py-6 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg`}
      >
        {/* Logo (Desktop) */}
        <div className="hidden md:flex items-center justify-center mb-4">
          <Link to="/" className="flex items-center gap-2">
            {/* <img src={} alt="Logo" className="h-10 w-10" /> */}
            <span className="font-bold text-xl">Jerin's Parlour</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/orderList"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            📋 Order List
          </NavLink>
          <NavLink
            to="/dashboard/add-service"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            ➕ Add Service
          </NavLink>
          <NavLink
            to="/dashboard/make-admin"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            👤 Make Admin
          </NavLink>
          <NavLink
            to="/dashboard/manage-services"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            🛠 Make Admin
          </NavLink>
          <NavLink
            to="/dashboard/manage-services"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            🛠 Manage Services
          </NavLink>
          
        </nav>

        {/* Footer Links */}
        <div className="flex flex-col gap-2 pt-6 border-t">
          <NavLink
            to="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition text-gray-700"
          >
            <Settings className="w-5 h-5" />
            Profile
          </NavLink>
          <button
            onClick={() => console.log("Logout clicked")}
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition text-gray-700"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
