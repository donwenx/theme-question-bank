<template>
  <div class="user">
    <div class="head">
      <div class="avatar">
        <img :src="user.avatar" alt="">
      </div>
      <div class="head-info">
        <div class="title">{{ user.name }}</div>
        <div class="sub-title">ID: {{ user.id }}</div>
        <div class="bio">简介: {{ user.dio }}</div>
      </div>
    </div>
    <div class="container">
      <div class="record">
        历史记录
        <a-tabs v-model:activeKey="activeKey">
          <template #rightExtra>
            <router-link to="record">
              <a-button type="text" v-if="activeKey === '1'" size="small" class="btn">
                所有记录
                <RightOutlined style="font-size: 0.8em;" />
              </a-button>
            </router-link>
          </template>

          <a-tab-pane key="1" tab="最近查看">
            <div class="table">
              <a-table class="ant-table-striped" :columns="columns" :data-source="data">
                <template #headerCell="{ column }">
                  <template v-if="column.key === 'name'">
                    <span>
                      Name
                    </span>
                  </template>
                </template>

                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'name'">
                    {{ record.id }}.{{ record.name }}
                  </template>
                </template>
              </a-table>
            </div>
          </a-tab-pane>

          <a-tab-pane key="2" tab="发布题目" force-render>Content of Tab Pane 2</a-tab-pane>

          <a-tab-pane key="3" tab="评论">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>


      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRecordStore } from '@/store/modules/record';
import { useUserStore } from '@/store/modules/user';
import { RightOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const user = useUserStore().userInfo
const record = useRecordStore().record
const activeKey = ref('1');


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
];

const data = ref()
data.value = record

</script>

<style lang="less" scoped>
.user {
  display: flex;
  flex-direction: column;

  .head {
    display: flex;

    .avatar {
      width: 5rem;
      border-radius: 0.5rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .head-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;

      .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #262626;
      }

      .sub-title {
        color: #3c3c4399;
      }

      .bio {
        color: #3c3c4399;
        font-size: .875rem;

      }
    }
  }

  .container {
    margin-top: 30px;

    .record {
      border-radius: 0.5rem;
      padding: 20px;
      background: #fff;
      .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .table {}
    }
  }
}
</style>
