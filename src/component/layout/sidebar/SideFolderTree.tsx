import { useNavigate } from "react-router-dom";
import { Icon } from "../../common/Icon";
import { Folder } from "./SideBarType";
import { PATH } from "../../../constants/Path";

type Props = {
  title?: string;
  folders: Folder[];
};

export default function SideFolderTree({ title, folders }: Props) {
  
  const navigate = useNavigate();
  const goToSubscribePosts = (subscribeId: number, subscribeTitle: string) => {
    navigate(PATH.SUBSCRIBE, {
      state: {
        subscribeId: subscribeId,
        subscribeTitle: subscribeTitle,
      },
    });
  };

  return (
    <>
      <div className="text-lg font-bold">{title || "이름 없음"}</div>
      <ul className="menu w-70 rounded-box">
        <li>
          {folders && folders.length > 0 ? (
            folders.map((folder) => (
              <details>
                <summary>
                  <Icon name="folder" />
                  {folder.name}
                </summary>
                <ul>
                  {folder.blogs.map((blog) => (
                    <li>
                      <a onClick={() => goToSubscribePosts(blog.id, blog.title)}>{blog.title}</a>
                    </li>
                  ))}
                </ul>
              </details>
            ))
          ) : (
            <p>폴더가 없습니다.</p>
          )}
        </li>
      </ul>
    </>
  );
}
