import axios from "axios";
import { API_PATH } from "../../../../../constants/ApiPath";
import { Blog, Folder } from "../../../../layout/sidebar/SideBarType";
import BlogBox from "./BlogBox";
import { useState } from "react";

type Props = {
  folder?: Folder;
  privateFolders: Folder[];
  setPrivateFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  sharedFolders: Folder[];
  setSharedFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export default function SubscribeSection({
  folder,
  privateFolders,
  setPrivateFolders,
  sharedFolders,
  setSharedFolders,
}: Props) {
  const [currentFolder, setCurrentFolder] = useState<Folder | undefined>(folder);
  const [newBlogUrl, setNewBlogUrl] = useState<string>("");

  const isBlogUrlEmpty = (): boolean => {
    return newBlogUrl !== undefined && newBlogUrl !== "";
  };

  const validBlogUrlLength = (): boolean => {
    return newBlogUrl.length <= 2500;
  };

  const alertInvalidBlogUrl = (): boolean => {
    if (!isBlogUrlEmpty()) {
      alert("구독할 블로그 주소를 입력하세요.");
      return false;
    }
    if (!validBlogUrlLength()) {
      alert("구독할 블로그 주소는 2,500글자 이내로 입력하세요.");
      return false;
    }
    return true;
  };

  const addBlog = () => {
    if (currentFolder == undefined) {
      console.log("folder 정보가 없습니다.");
      return;
    }

    if (!alertInvalidBlogUrl()) {
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BASE_URL + API_PATH.FOLDER.SUBSCRIBE.ADD(currentFolder.id),
        {
          blogUrl: newBlogUrl,
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
        const newBlog: Blog = {
          id: responseData.subscribeId,
          title: responseData.subscribeTitle,
          unreadCount: responseData.unreadCount,
        };
        currentFolder.blogs.push(newBlog);

        const newFolder: Folder = {
          id: currentFolder.id,
          name: currentFolder.name,
          unreadCount: currentFolder.unreadCount,
          blogs: currentFolder.blogs,
          invitedMembers: currentFolder.invitedMembers,
        };

        if (newFolder.invitedMembers.length == 0) {
          const folderIndex: number = privateFolders.findIndex(
            (f) => f.id == newFolder.id
          );
          privateFolders[folderIndex] = newFolder;
          setPrivateFolders([...privateFolders]);
        } else {
          const folderIndex: number = sharedFolders.findIndex(
            (f) => f.id == newFolder.id
          );
          sharedFolders[folderIndex] = newFolder;
          setSharedFolders([...sharedFolders]);
        }
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  };

  const deleteBlog = (folderSubscribeId: number) => {
    if (!confirm('해당 블로그를 삭제하시겠습니까?')) return;

    if (currentFolder == undefined) {
      console.log("folder 정보가 없습니다.");
      return;
    }

    axios
      .delete(
        import.meta.env.VITE_BASE_URL + API_PATH.FOLDER.SUBSCRIBE.DELETE(currentFolder.id, folderSubscribeId),
        {
          withCredentials: true,
        })
      .then(function (response) {
        if (response.status != 204) {
          return;
        }

        const newBlogs: Blog[] = currentFolder.blogs.filter((blog) => blog.id !== folderSubscribeId);
        const newFolder: Folder = {
          id: currentFolder.id,
          name: currentFolder.name,
          unreadCount: currentFolder.unreadCount,
          blogs: newBlogs,
          invitedMembers: currentFolder.invitedMembers,
        }
        setCurrentFolder(newFolder);

        if (newFolder.invitedMembers.length == 0) {
          const folderIndex: number = privateFolders.findIndex(
            (f) => f.id == newFolder.id
          );
          privateFolders[folderIndex] = newFolder;
          setPrivateFolders([...privateFolders]);
        } else {
          const folderIndex: number = sharedFolders.findIndex(
            (f) => f.id == newFolder.id
          );
          sharedFolders[folderIndex] = newFolder;
          setSharedFolders([...sharedFolders]);
        }
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  }

  return (
    <div className="md:w-3/5 w-full">
      <h1 className="text-left text-lg font-bold mt-4 px-2">구독 관리</h1>
      <div className="flex gap-1 mb-4">
        <input
          type="text"
          placeholder="추가할 폴더 이름을 입력해주세요."
          className="input input-bordered input-primary w-full"
          onChange={(e) => setNewBlogUrl(e.target.value)}
        />
        <button className="btn btn-square btn-secondary" onClick={addBlog}>
          +
        </button>
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-success bg-green-50 rounded-box gap-2">
          {currentFolder &&
            currentFolder.blogs.map((blog: Blog, index: number) => (
              <BlogBox key={index} blog={blog} deleteHandler={deleteBlog} />
            ))}
        </div>
      </div>
    </div>
  );
}
