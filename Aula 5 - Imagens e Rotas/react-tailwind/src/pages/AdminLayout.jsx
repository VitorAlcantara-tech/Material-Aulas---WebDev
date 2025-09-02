import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Logo from "../assets/logo.png"

import { Outlet } from "react-router-dom";


export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        
        <Outlet />
      </div>
    </div>
  );
}
