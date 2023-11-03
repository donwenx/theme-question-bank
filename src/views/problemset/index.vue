<template>
  <div class="problemset">

    <div class="dropdown">
      <a-dropdown class="dropdown-item" v-for="item in menuList" :key="item.name">
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item v-for="child in item.children" :key="child.name">
              <div class="menu-item">
                <div class="icon" v-if="child.icon">
                  <img src="../../assets/logo.png" alt="">
                </div>
                <div>
                  {{ child.name }}
                </div>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
        <a-button>
          {{ item.name }}
          <DownOutlined />
        </a-button>
      </a-dropdown>

      <a-input class="search" v-model="searchValue" placeholder="搜索题目或编号" @click="onSearch">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>

      <a-dropdown placement="bottomRight" class="setup">
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="onChildShowTag">
              显示标签
            </a-menu-item>
          </a-menu>
        </template>
        <a-button>
          <SettingOutlined />
        </a-button>

      </a-dropdown>
      <a-button class="random" @click="onChildRandom">随机一题</a-button>
    </div>

    <div>
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              题目
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'state'">
            <div v-if="record.state === 1">已完成</div>
            <div v-if="record.state === 0"></div>
          </template>
          <template v-if="column.key === 'name'">
            <router-link to="/home">
              {{ record.name }}
            </router-link>
          </template>
          <template v-else-if="column.key === 'level'">
            <a-tag :bordered="false" v-if="record.level === 1" color="green">简单</a-tag>
            <a-tag :bordered="false" v-if="record.level === 2" color="orange">中等</a-tag>
            <a-tag :bordered="false" v-if="record.level === 3" color="red">困难</a-tag>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag v-for="tag in record.tags" :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, reactive, onMounted } from 'vue';
import { DownOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { useProblemsetStore } from '@/store/modules/problemset';

// 下拉菜单
const store = useProblemsetStore()
const menuList = store.menuName
const handleMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e, e.key);
  // 更新查询新数据
  updateData()
};


// 搜索框
const searchValue = ref<string>('');
const onSearch = (value: string) => {
  console.log('use value', value);
  console.log('or use this.value', searchValue.value);
};

// 显示标签
const onChildShowTag = () => {
  console.log('显示标签')
}

// 跳转到随机题页面
const onChildRandom = (value: string) => {
  console.log(value)
}


// 表格
const columns = store.tableColumns
const data = ref<any[]>([])

const updateData = () => {
  // 发起更新请求
  data.value = store.tableInfo
  console.log(data)
}

onMounted(() => {
  updateData()
})
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  
  img {
    width: 100%;
    height: 100%;
  }
}

.problemset {
  background: #fff;
  border-radius: 8px;
  padding: 20px;

  .dropdown {
    display: flex;
    flex-direction: row;
    padding: 20px 0;

    .dropdown-item {
      margin-right: 8px;
    }

    .search {
      margin-right: 8px;
      width: 300px;
    }

    .setup {
      margin-right: 8px;
    }

    .random {
      color: #43c973;
      border: none;
    }
  }

}
.menu-item {
  display: flex;
  flex-direction: row;
}
</style>