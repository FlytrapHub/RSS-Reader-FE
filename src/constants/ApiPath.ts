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
    ADD: "/folders",
    DELETE: (folderId: number) => `/folders/${folderId}`,
    MEMBER: {
      ADD: (folderId: number) => `/folders/${folderId}/members`,
      DELETE: (folderId: number, memberId: number) => `/folders/${folderId}/members/${memberId}`
    },
    SUBSCRIBE: {
      ADD: (folderId: number) => `/folders/${folderId}/rss`,
      DELETE: (folderId: number, folderSubscribeId: number) => `/folders/${folderId}/rss/${folderSubscribeId}`
    }
  },
  MEMBER: {
    GET_ALL_BY_NAME: (memberName: string) => `/members?name=${memberName}`
  },
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ADMIN_LOGIN: "/admin/login",
  }
};
