import { InvitedMember } from "../../../layout/sidebar/SideBarType";

type Props = {
  member: InvitedMember;
};

export default function MemberSearchBox({ member }: Props) {
  return (
    <li>
      <a>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={member.profile} />
          </div>
        </div>
        {member.name}
      </a>
    </li>
  );
}
