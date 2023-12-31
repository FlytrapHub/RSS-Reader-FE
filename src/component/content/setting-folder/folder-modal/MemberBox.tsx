import { Icon } from "../../../common/Icon";
import { InvitedMember } from "../../../layout/sidebar/SideBarType";

type Props = {
  member: InvitedMember,
}

export default function MemberBox({ member }: Props) {
    return (
        <div className="h-12 flex items-center hover:bg-success rounded-lg">
          <div className="flex flex-none justify-center w-1/12 mx-3">
            <Icon name="folder" size="L" />
          </div>
          <div className="flex-1 w-full">
            <div className="text-lg text-left">{member.name}</div>
            <div className="text-sm text-left text-gray-400">블로그 주소</div>
          </div>
          <div className="flex-none w-1/12 flex"></div>
        </div>
      );
}