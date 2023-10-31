import { defineStore } from "pinia";

export const useHomeStore = defineStore('app-home', {
  state: () => ({
    navBarList: [
      {
        path: '/home',
        name: '首页',
      },
      {
        path: '/problemset',
        name: '题库',
      },
    ],
  }),
  getters: {
  },
  actions: {
  },
})