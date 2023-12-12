export const API_PATH = {
  POST: {
    GET_ALL: "/posts",
  },
  BOOKMARK: {
    GET_ALL: "/bookmarks",
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
