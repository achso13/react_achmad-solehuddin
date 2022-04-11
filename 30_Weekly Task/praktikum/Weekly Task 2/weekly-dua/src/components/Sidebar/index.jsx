import BrandLogo from "../BrandLogo";
import SidebarLink from "../SidebarLink";
export default function Sidebar(props) {
  const { active } = props;
  return (
    <nav
      className={
        active
          ? "fixed top-0 right-0 z-20 h-screen w-72 origin-right scale-x-100 bg-white py-8 px-4 transition-all"
          : "fixed top-0 right-0 z-20 h-screen w-72 origin-right scale-x-0 bg-white py-8 px-4 transition-all"
      }
    >
      <BrandLogo>Achmad Solehuddin</BrandLogo>
      <hr className="mb-2 mt-8 border-gray-400" />
      <SidebarLink />
    </nav>
  );
}
