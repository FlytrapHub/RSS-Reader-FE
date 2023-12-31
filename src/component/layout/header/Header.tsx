import { Icon } from "../../common/Icon";

type Props = {
  title: string,
}

export default function Header({title}: Props) {
  return (
    <div className="navbar">
      {/* Open Sidebar */}
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <Icon name={'stack'} />
        </label>
      </div>

      {/* Page Name */}
      <div className="navbar-center">
        <p className="text-3xl font-bold">{title}</p>
      </div>
      
      {/* User Info */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
