import { defineStore } from "pinia";

export const useProblemsetStore = defineStore('app-problemset', {
  state: () => ({
    menuName: [
      {
        name: '提单',
        children: [
          { name: '简单', icon: '', },
          { name: '中等', icon: '', },
          { name: '困难', icon: '', },
        ],
      },
      {
        name: '状态',
        children: [
          { name: '未开始', icon: '1', },
          { name: '已解答', icon: '1', },
          { name: '尝试过', icon: '1', },
        ],
      },
      {
        name: '标签',
        children: [
          {
            name: '基本', icon: '', children: [
              { name: '数组', icon: '', },
              { name: '字符串', icon: '', },
              { name: '排序', icon: '', },
            ]
          },
          {
            name: '算法', icon: '', children: [
              { name: '动态规则', icon: '', },
              { name: '贪心', icon: '', },
              { name: '深度优先搜索', icon: '', },
            ]
          },
          {
            name: '其他', icon: '', children: [
              { name: '数据库', icon: '', },
              { name: '设计', icon: '', },
              { name: '数据流', icon: '', },
            ]
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {},
})