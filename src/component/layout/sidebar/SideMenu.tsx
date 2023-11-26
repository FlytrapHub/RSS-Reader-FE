import SideFolderTree from "./SideFolderTree";

export default function SideMenu() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
      <li>
        <a className="btn btn-success text-lg">전체 보기</a>
      </li>
      <li>
        <a className="btn btn-success text-lg">북마크</a>
      </li>
      <li>
        <a className="btn btn-success text-lg">구독 관리</a>
      </li>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        <li>
          <SideFolderTree title={'내 폴더'} />
        </li>
        <li>
          <SideFolderTree title={'공유 폴더'} />
        </li>
      </div>
    </ul>
  );
}
