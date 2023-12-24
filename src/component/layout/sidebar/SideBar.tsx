import { Folder } from "./SideBarType";
import SideLogo from "./SideLogo";
import SideMenu from "./SideMenu";

type Props = {
  privateFolders: Folder[],
  sharedFolders: Folder[],
};

export default function SideBar({ privateFolders, sharedFolders }: Props) {
  return (
    <>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <SideLogo />

      <SideMenu 
        privateFolders={privateFolders} 
        sharedFolders={sharedFolders} 
      />
    </>
  );
}
