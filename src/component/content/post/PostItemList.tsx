import PostItem from "./PostItem";
import { Post } from "./PostType"

type Props = {
    posts: Post[]
}

export default function PostItemList({posts}: Props) {
    return (
      <>
        <div className="w-full flex flex-col p-4 gap-4">
          {posts &&
            posts.map((post: Post, index: number) => (
              <PostItem key={index} post={post} />
            ))}
        </div>
      </>
    );
}