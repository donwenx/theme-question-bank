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
    tableColumns: [
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '难度',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '级别',
        dataIndex: 'level',
        key: 'level'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
      },
    ],
    tableInfo: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        state: 0,
        level: 3,
        tags: ['数组', '字符串'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        state: 1,
        level: 1,
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        state: 1,
        level: 2,
        tags: ['cool', 'teacher'],
      },
    ],
  }),
  getters: {},
  actions: {},
})