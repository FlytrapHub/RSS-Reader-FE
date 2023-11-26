import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

export default function Layout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-start">
        <Header />
        {/* Content */}
      </div>

      <div className="drawer-side">
        <SideBar />
      </div>
    </div>
  );
}
