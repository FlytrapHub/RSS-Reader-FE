export const API_PATH = {
  POST: {
    GET: (postId: number) => `/posts/${postId}`,
    GET_ALL: "/posts",
  },
  BOOKMARK: {
    GET_ALL: "/bookmarks",
    ADD: (postId: number) => `/posts/${postId}/bookmarks`,
    DELETE: (postId: number) => `/posts/${postId}/bookmarks`,
  },
  SUBSCRIBE: {
    POST: {
      GET_ALL: (subscribeId: number) => `/subscribes/${subscribeId}/posts`,
    }
  },
  FOLDER: {
    GET_ALL: "/folders",
  },
};
