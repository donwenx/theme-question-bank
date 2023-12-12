import { defineStore } from "pinia";

export const useUserStore = defineStore('app-user', {
  state: () => ({
    count: 0,
    userInfo: {
      id: 100,
      name: 'name',
      bio: '简介内容',
      avatar: '/img/avatar.jpg',
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