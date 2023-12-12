import { ReactNode } from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

type Props = {
  headerTitle: string,
  children: ReactNode;
};

export default function Layout({headerTitle, children}: Props) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-start">
        <Header title={headerTitle} />
        {/* Content */}
        {children}
      </div>

      <div className="drawer-side">
        <SideBar />
      </div>
    </div>
  );
}
