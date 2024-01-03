import axios from "axios";
import { Folder, InvitedMember } from "../../../layout/sidebar/SideBarType";
import MemberBox from "./MemberBox";
import { API_PATH } from "../../../../constants/ApiPath";
import { useState } from "react";

type Props = {
  folder?: Folder;
  privateFolders: Folder[];
  setPrivateFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  sharedFolders: Folder[];
  setSharedFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export default function MemberSection({
  folder,
  privateFolders,
  setPrivateFolders,
  sharedFolders,
  setSharedFolders,
}: Props) {
  const [newMemberName, setNewMemberName] = useState<string>("");

  const isNewMemberNameEmpty = (): boolean => {
    return newMemberName !== undefined && newMemberName !== "";
  };

  const validNewMemberNameLength = (): boolean => {
    return newMemberName.length <= 255;
  };

  const alertInvalidNewMemberName = (): boolean => {
    if (!isNewMemberNameEmpty()) {
      alert("추가할 멤버 이름을 입력하세요.");
      return false;
    }
    if (!validNewMemberNameLength()) {
      alert("추가할 멤버 이름은 255글자 이내로 입력하세요.");
      return false;
    }
    return true;
  };

  // TODO: 이름 or 이메일로 회원을 검색하는 함수 추가하기
  // TODO: 목록은 DropDown으로 보여준다. 목록에서 회원을 클릭하면 State에 memberId를 set 한다
  // TODO: memberId가 set 되어 있을 때만 회원 추가 API 요청을 보낼 수 있다.
  // TODO: memberId 가 set 되어 있는 상태에서 멤버 입력창 값이 변경되면 State에 memberId set을 취소한다
  // OR
  // TODO: 회원 목록 DropDown에서 회원을 클릭하면 자동으로 회원 추가 API 요청을 보내도록 한다
  // const findMembersByName = () => {
  //
  // }

  const addMember = () => {
    if (folder == undefined) {
      console.log("folder 정보가 없습니다.");
      return;
    }

    if (!alertInvalidNewMemberName()) {
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BASE_URL + API_PATH.FOLDER.MEMBER.ADD(folder.id),
        {
          inviteeId: newMemberName,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        if (response.status != 201) {
          return;
        }

        const responseData = response.data.data;
        const newMember: InvitedMember = {
          id: responseData.id,
          name: responseData.name,
          profile: responseData.profile,
        };
        folder.invitedMembers.push(newMember);

        const newFolder: Folder = {
          id: folder.id,
          name: folder.name,
          unreadCount: folder.unreadCount,
          blogs: folder.blogs,
          invitedMembers: folder.invitedMembers,
        };
        
        if (newFolder.invitedMembers.length == 1) {
          // [조건] 멤버를 추가했더니 멤버 수가 1인 경우(처음으로 멤버가 추가된 경우)
          // [행동] folder가 privateFolders에서 sharedFolders로 이동되여햐 한다
          // privateFolders에서 newFolder 제거
          privateFolders = privateFolders.filter((f) => f.id !== newFolder.id);
          setPrivateFolders([...privateFolders]);
        
          // sharedFolders에 newFolder 추가
          setSharedFolders([...sharedFolders, newFolder]);
        } else if (newFolder.invitedMembers.length >= 2) {
          // [조건] 멤버를 추가했더니 멤수 수가 2 이상인 경우 = 기존에도 멤버가 있던 경우
          // [행동] sharedFolders에 있던 폴더가 멤버 추가된 newFolder로 교체되어야 한다
          // 기존의 folder를 newFolder로 교체
          const folderIndex: number = sharedFolders.findIndex(
            (f) => f.id == newFolder.id
          );
          sharedFolders[folderIndex] = newFolder;
          setSharedFolders([...sharedFolders]);
        }

        setNewMemberName('')
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  };

  return (
    <div className="md:w-2/5 w-full">
      <h1 className="text-left text-lg font-bold mt-4 px-2">멤버 관리</h1>
      <div className="flex gap-1  mb-4">
        <input
          type="text"
          placeholder="추가할 폴더 이름을 입력해주세요."
          className="input input-bordered input-primary w-full"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
        />
        <button className="btn btn-square btn-secondary" onClick={addMember}>+</button>
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-success bg-green-50 rounded-box gap-2">
          {folder &&
            folder.invitedMembers.map((member: InvitedMember, index: number) => (
              <MemberBox key={index} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
}
