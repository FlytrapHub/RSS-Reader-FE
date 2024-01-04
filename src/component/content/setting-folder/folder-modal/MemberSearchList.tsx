import { InvitedMember } from "../../../layout/sidebar/SideBarType";
import MemberSearchBox from "./MemberSearchBox";

type Props = {
  members: InvitedMember[];
};
export default function MemberSearchList({ members }: Props) {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
    >
      {members && members.map((member) => (
        <MemberSearchBox member={member} />
      ))}
    </ul>
  );
}
