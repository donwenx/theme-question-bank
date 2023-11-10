import { defineStore } from "pinia";

export const useCollectStore = defineStore('app-collect', {
  state: () => ({
    collect: [
      { id: 1, title: '创建收藏夹name', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 3, public: 1, describe: 'xxxx', },
      { id: 2, title: 'vue', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 1, public: 2, describe: 'xxxx', },
      { id: 3, title: '前端', category: '前端', createTime: '2023-11-4', updateTime: '2023-11-4', count: 4, public: 1, describe: 'xxxx', },
    ],
    collectionDetails: [
      { id: 1, title: 'vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 3, public: 1, describe: 'xxxx', },
      { id: 2, title: '2vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 1, public: 1, describe: 'xxxx', },
      { id: 3, title: '3vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 4, public: 1, describe: 'xxxx', },
    ],
  }),
  getters: {},
  actions: {},
})