import { defineStore } from "pinia";

export const useUserStore = defineStore('app-user', {
  state: () => ({
    count: 0,
    userInfo: {
      id: 100,
      name: 'name',
      dio: '简介内容',
      avatar: '/img/avatar.jpg',
      record: [
        { id: 1, title: 'vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 3, },
        { id: 2, title: '2vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 1, },
        { id: 3, title: '3vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 4, },
      ],
      comment: [
        { id: 1, user_id: 1, content: '评论1', createTime: '2023-11-04 10:00:00' },
        { id: 2, user_id: 2, content: '评论2', createTime: '2023-11-04 11:00:00' },
        { id: 3, user_id: 3, content: '评论3', createTime: '2023-11-04 12:00:00' },
      ],
      collect: [
        { id: 1, title: '创建收藏夹name', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 3, public: 1, describe: 'xxxx', },
        { id: 2, title: 'vue', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 1, public: 2, describe: 'xxxx', },
        { id: 3, title: '前端', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 4, public: 1, describe: 'xxxx', },
      ],
    },
  }),
  getters: {
    double: (state) => state.count + 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})