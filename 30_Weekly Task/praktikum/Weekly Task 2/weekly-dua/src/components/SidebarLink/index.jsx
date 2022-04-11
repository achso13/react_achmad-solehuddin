import { VscHome } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function SidebarLink() {
  const tasks = useSelector((state) => state.getTask);
  return (
    <ul className="text-base font-medium text-gray-600">
      <li>
        <NavLink
          to="/"
          className="my-1 flex items-center rounded-md border-2 border-transparent p-1 hover:box-content hover:border-blue-500 active:bg-blue-500 active:text-gray-100"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgb(59 130 246 / 1)" : "",
              color: isActive ? "rgb(243 244 246 / 1)" : "",
            };
          }}
        >
          <div className="text-lg">
            <VscHome />
          </div>
          <span className="mx-3">Home</span>
        </NavLink>
      </li>
      <hr className="mt-2 mb-4 border-gray-400" />
      <p className="font-bold text-gray-600">PROJECT</p>
      {tasks.map((value) => (
        <NavLink
          key={value.id}
          to={"/task/" + value.slug}
          className="my-1 flex items-center rounded-md border-2 border-transparent p-1 hover:box-content hover:border-blue-500 active:bg-blue-500 active:text-gray-100"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgb(59 130 246 / 1)" : "",
              color: isActive ? "rgb(243 244 246 / 1)" : "",
            };
          }}
        >
          <div className="text-lg">{value.icon}</div>
          <span className="mx-3">{value.title}</span>
        </NavLink>
      ))}
    </ul>
  );
}
