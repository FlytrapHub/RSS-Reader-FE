import { Folder } from "../../layout/sidebar/SideBarType";
import FolderList from "./FolderList";

type Props = {
    title: string,
    folders: Folder[],
}

export default function FolderSettingCard({ title, folders }: Props) {
    return (
        <div className="card lg:w-2/5 bg-base-100 border shadow-xl p-4">
        <div className="card-body">
          <div className="card-title mb-4">{title}</div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="추가할 폴더 이름을 입력해주세요."
              className="input input-bordered input-primary w-full"
            />
            <button className="btn btn-square btn-secondary">
              +
            </button>
          </div>
          <FolderList folders={folders} />
        </div>
      </div>
    );
}