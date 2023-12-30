import { Blog, Folder } from "../../../layout/sidebar/SideBarType";
import BlogBox from "./BlogBox";

type Props = {
  folder?: Folder,
  setFolder: React.Dispatch<React.SetStateAction<Folder | undefined>>,
};

export default function SubscribeSection({ folder, setFolder }: Props) {
  return (
    <div className="md:w-3/5 w-full">
      <h1 className="text-left text-lg font-bold mt-4 px-2">구독 관리</h1>
      <div className="flex gap-1 mb-4">
        <input
          type="text"
          placeholder="추가할 폴더 이름을 입력해주세요."
          className="input input-bordered input-primary w-full"
        />
        <button className="btn btn-square btn-secondary">+</button>
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-success bg-green-50 rounded-box gap-2">
          { folder && folder.blogs.map((blog: Blog) => (
            <BlogBox blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
