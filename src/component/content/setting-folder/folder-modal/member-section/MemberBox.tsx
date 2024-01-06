import { InvitedMember } from "../../../../layout/sidebar/SideBarType";

type Props = {
  member: InvitedMember;
};

export default function MemberBox({ member }: Props) {
  return (
    <div className="h-12 flex items-center hover:bg-success rounded-lg">
      <div className="flex flex-none justify-center w-1/12 mx-3">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={member.profile} />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="text-lg text-left">{member.name}</div>
      </div>
      <div className="flex-none w-1/12 flex"></div>
    </div>
  );
}
