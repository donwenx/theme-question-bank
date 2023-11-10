import { defineStore } from "pinia";

export const useCommentStore = defineStore('app-comment', {
  state: () => ({
    comment: [
      { id: 1, user_id: 1, content: '评论1', createTime: '2023-11-04 10:00:00' },
      { id: 2, user_id: 2, content: '评论2', createTime: '2023-11-04 11:00:00' },
      { id: 3, user_id: 3, content: '评论3', createTime: '2023-11-04 12:00:00' },
    ],
  }),
  getters: {

  },
  actions: {},
})