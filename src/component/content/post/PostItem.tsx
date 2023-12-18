import { useState } from "react";
import { Icon } from "../../common/Icon";
import { Post } from "./PostType";
import { API_PATH } from "../../../constants/ApiPath";
import axios from "axios";

type Props = {
  key: number;
  post: Post;
};

const DESCRIPTION_MAX_LENGTH = 250;

export default function PostItem({ key, post }: Props) {
  const [isBookmark, setIsBookmark] = useState<boolean>(post.bookmark);

  function convertHtmlToText(htmlString: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const text = doc.body.textContent || "";

    if (text.length <= DESCRIPTION_MAX_LENGTH) {
      return text;
    } else {
      return text.substring(0, DESCRIPTION_MAX_LENGTH) + "...";
    }
  }

  const bookmarkHandler = (postId: number) => {
    if (isBookmark) {
      axios
        .delete(import.meta.env.VITE_BASE_URL + API_PATH.BOOKMARK.DELETE(postId), {
          withCredentials: true,
        })
        .then(function (response) {
          if (response.status == 200) {
            setIsBookmark(false);
          } else {
            throw new Error("Request failed: " + response.status);
          }
        })
        .catch(function (error) {
          console.log("error: {}", error);
        });
    } else {
      axios
        .post(
          import.meta.env.VITE_BASE_URL + API_PATH.BOOKMARK.ADD(postId),
          {},
          {
            withCredentials: true,
          }
        )
        .then(function (response) {
          if (response.status == 201) {
            setIsBookmark(true);
          } else {
            throw new Error("Request failed: " + response.status);
          }
        })
        .catch(function (error) {
          console.log("error: {}", error);
        });
    }
  };

  return (
    <div key={key} className="card lg:card-side shadow-xl border p-4">
      <div className="flex-none flex items-center justify-center">
        {/* <div className="skeleton h-32 w-52">
          <img src={post.thumbnailUrl} className="object-cover w-full h-full rounded-sm" />
        </div> */}
        <img
          src={post.thumbnailUrl}
          className="object-cover h-32 w-52 rounded-xl"
        />
      </div>
      <div className="flex-1 px-4">
        <p className="text-left text-sm text-gray-400">
          {post.subscribeTitle} ({post.pubDate.substring(0, 10)})
        </p>
        <h2 className="card-title">{post.title}</h2>
        <p className="text-left">{convertHtmlToText(post.description)}</p>
      </div>
      <div className="flex flex-none space-x-2">
        <div>
          {post.open ? <Icon name="view" /> : undefined}
        </div>
        <div onClick={() => bookmarkHandler(post.id)}>
          {isBookmark ? <Icon name="bookmarkFill" /> : <Icon name="bookmark" />}
        </div>
      </div>
    </div>
  );
}
