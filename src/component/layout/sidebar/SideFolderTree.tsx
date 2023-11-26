import { Icon } from "../../common/Icon";

type Props = {
  title?: string,
}

export default function SideFolderTree({title}: Props) {
  return (
    <>
      <div className="text-lg font-bold">{title || '이름 없음'}</div>
      <ul className="menu w-70 rounded-box">
        <li>
          <details open>
            <summary>
              <Icon name="folder" />
              기술 블로그
            </summary>
            <ul>
              <li>
                <a>지니 블로그</a>
              </li>
              <li>
                <a>이린 블로그</a>
              </li>
            </ul>
          </details>
          <details>
            <summary>
              <Icon name="folder" />
              요리 블로그
            </summary>
            <ul>
              <li>
                <a>감자의 요리교실</a>
              </li>
              <li>
                <a>듀이의 해피쿠킹</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
}
