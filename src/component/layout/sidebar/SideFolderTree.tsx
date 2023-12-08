import { Icon } from "../../common/Icon";
import { Folder } from "./SideBarType";

type Props = {
  title?: string,
  folders: Folder[],
}

export default function SideFolderTree({title, folders}: Props) {

  //const navigate = useNavigate();

  const goToBlog = (blogId: number) => {
    // TODO: 블로그 페이지로 이동
    //navigate();
    alert('blog: ' + blogId);
  }

  return (
    <>
      <div className="text-lg font-bold">{title || '이름 없음'}</div>
      <ul className="menu w-70 rounded-box">
        <li>
          {folders && folders.length > 0 ? (folders.map((folder) =>  (
            <details>
              <summary>
                <Icon name="folder" />
                {folder.name}
              </summary>
              <ul>
                {folder.blogs.map(blog => (
                  <li>
                    <a onClick={() => goToBlog(blog.id)}>{blog.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          ))) : (<p>폴더가 없습니다.</p>)}
        </li>
      </ul>
    </>
  );
}
