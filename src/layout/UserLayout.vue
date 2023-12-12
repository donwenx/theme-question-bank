<template>
  <div class="user-layout">
    <div class="user">
      <div class="user-info">
        <div class="avatar"><img :src="user.avatar" alt=""></div>
        <div class="bio">简介: {{ user.bio }}</div>
      </div>

      <div class="list" :class="{ 'active': isActive === '/collection' }" @click="onClickList('/collection')">
        <StarOutlined class="icon" />
        收藏夹
      </div>

      <div class="list" :class="{ 'active': isActive === '/record' }" to="record" @click="onClickList('/record')">
        <PieChartOutlined class="icon" />
        历史记录
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { StarOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const store = useUserStore()
const user = store.userInfo

let isActive = ref('')
isActive.value = route.path

const onClickList = (path: string) => {
  isActive.value = path
  router.push(path)
}
</script>

<style lang="less" scoped>
.user-layout {
  display: flex;
  flex-direction: row;

  .user {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    width: 240px;
    color: rgba(140, 140, 140, 1);

    .user-info {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {

        width: 5rem;
        border-radius: 0.5rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .bio {
        margin-top: 8px;
        color: #3c3c4399;
        font-size: .875rem;
      }
    }

    .list {
      font-size: 14px;
      padding: 14px 18px;
      border-top: 1px solid rgba(229, 229, 229, 1);
      color: #3c3c4399;
      border-radius: 0.5rem;

      .icon {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }

      &:hover {
        background: #edeef0;
      }
    }

    .active {
      color: rgba(10, 132, 255, 1);
      background: #edeef0;
    }
  }

  .container {
    flex: 1;
    margin-left: 20px;
    padding: 20px;
    border-radius: 0.5rem;
    background: #fff;
  }
}
</style>
