import { useEffect, useState } from "react";
import PostItem from "./post/PostItem";
import { Post } from "./post/PostType";
import axios from "axios";
import { API_PATH } from "../../constants/ApiPath";

export default function AllPostListContent() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BASE_URL + API_PATH.POST.GET_ALL, {
      withCredentials: true,
    })
    .then(function (response) {
      if (response.status == 200) {
        const posts = response.data.data.posts;
        setPosts(posts);
      } else {
        throw new Error("Request failed: " + response.status);
      }
    })
    .catch(function (error) {
      console.log('error: {}', error)
    });
  }, []);

  
  return (
    <div className="w-full flex flex-col p-4 gap-4">
      {posts && posts.map((post: Post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}
