import { useEffect, useState } from "react";
import { Icon } from "../../common/Icon";
import { InvitedMember } from "../sidebar/SideBarType";
import axios from "axios";
import { API_PATH } from "../../../constants/ApiPath";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/Path";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState<InvitedMember | null>(null);

  useEffect(() => {
    const storedMemberInfo = localStorage.getItem("MEMBER_INFO");
    if (storedMemberInfo) {
      setMemberInfo(JSON.parse(storedMemberInfo));
    }
  }, []);

  const logout = () => {
    axios
      .post(import.meta.env.VITE_BASE_URL + API_PATH.AUTH.LOGOUT, {
        withCredentials: true,
      })
      .then(function (response) {
        if (response.status == 204) {
          localStorage.removeItem('MEMBER_INFO');
          navigate(PATH.AUTH.LOGIN);
        }
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  };

  return (
    <div className="navbar">
      {/* Open Sidebar */}
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <Icon name={"stack"} />
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
            {memberInfo != null ? (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={memberInfo && memberInfo.profile}
                />
              </div>
            ) : (
              <div className="w-10 rounded-full bg-info"></div>
            )}
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
            <li>
              {memberInfo != null ? (
                <div>Welcome! <span className="font-bold">{memberInfo.name}</span></div>
              ) : (
                <div>회원 정보 없음.</div>
              )}
            </li>
            <li>
              <a onClick={() => logout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
