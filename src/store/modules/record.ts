import { defineStore } from "pinia";

export const useRecordStore = defineStore('app-record', {
  state: () => ({
    record: [
      { id: 1, title: 'vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 3, },
      { id: 2, title: '2vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 1, },
      { id: 3, title: '3vue是什么', content: '答案', category: '前端', user: 'user1', createTime: '2023-11-4', updateTime: '2023-11-4', level: '3', count: 4, },
    ],
  }),
  getters: {},
  actions: {},
})