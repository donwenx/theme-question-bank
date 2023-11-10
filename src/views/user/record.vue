<template>
  <div class="record">
    <div class="container">
      <div class="head">
        <a-input-search class="search" v-model:value="searchValue" placeholder="搜索题目" @search="onSearch" />
      </div>
      <div class="table">

        <a-table class="ant-table-striped" :columns="columns" :data-source="data">

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              {{ record.id }}.{{ record.name }}
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRecordStore } from '@/store/modules/record';
import { useUserStore } from '@/store/modules/user';
import { ref } from 'vue';

const user = useUserStore().userInfo
const record = useRecordStore().record

const searchValue = ref<string>('');
const onSearch = () => {
  console.log('use value', searchValue.value);
};

const columns = [
  {
    title: '查看时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '题目',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '难度',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: '查看次数',
    dataIndex: 'count',
    key: 'count',
  },
];
const data = ref()
data.value = record
</script>
<style lang="less" scoped>
.record {
  box-sizing: border-box;
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 0.5rem;
}
</style>
