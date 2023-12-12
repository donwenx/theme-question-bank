<template>
  <div class="user-card">
    <div class="user-item" @click="onClickUserItem">
      <div class="user-avatar"><img src="/img/avatar.jpg" alt=""></div>
      <div class="user-info">
        <div class="user-info-name">{{ userInfo.name }}</div>
        <div class="user-info-bio">{{ userInfo.bio }}</div>
      </div>
    </div>
    <div class="count-container">
      <div class="count-item">
        <div class="count-item-num">39</div>
        <div class="count-item-text">文章</div>
      </div>
      <div class="count-item">
        <div class="count-item-num">39k</div>
        <div class="count-item-text">阅读</div>
      </div>
      <div class="count-item">
        <div class="count-item-num">39</div>
        <div class="count-item-text">粉丝</div>
      </div>
    </div>
    <div class="operate-btn">
      <a-button type="primary" class="btn">关注</a-button>
      <a-button class="btn">私信</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useUserStore()
const userInfo = store.userInfo
const userId = userInfo.id


const onClickUserItem = () => {
  console.log('跳转用户信息页')
  router.push(`/user/${userId}`)
}
</script>
<style lang="less" scoped>
.user-card {
  width: 300px;
  background: #fff;
  padding: 20px;
  border-radius: 0.5rem;
  margin-bottom: 20px;

  .user-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-bottom: 8px;

    .user-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .user-info {
      flex: 1;
      margin-left: 8px;

      .user-info-name {
        font-size: 16px;
        font-weight: 500;
        color: #252933;
      }

      .user-info-bio {
        font-size: 14px;
        font-weight: 400;
        color: #8a919f;
        line-height: 22px;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }

  }

  .count-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 8px;
    .count-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .count-item-num {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #252933;
      }

      .count-item-text {
        font-size: 13px;
        font-weight: 400;
        line-height: 22px;
        color: #8a919f;
      }
    }
  }

  .operate-btn {
    display: flex;
    min-height: 36px;
    .btn {
      flex: 1;
    }
    .btn + .btn {
      margin-left: 16px;
    }
  }
}</style>
