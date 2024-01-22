import { Post } from "./PostType";

type Props = {
  post: Post;
  setPostForModal: (post?: Post) => void;
};

export default function PostModal({ post, setPostForModal }: Props) {
  const closeModal = () => {
    setPostForModal(undefined);
  };

  return (
    <dialog id="post_modal" className="modal" open>
      <div className="modal-box w-11/12 max-w-5xl">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{post.title}</h3>
        <p>
          <a href={post.guid} target="_blank">
            {post.guid}
          </a>
        </p>
        <p>{post.pubDate}</p>
        <div className="py-4">
          <div
            dangerouslySetInnerHTML={{ __html: post.description }}
          >
        </div>
        </div>
      </div>
    </dialog>
  );
}
