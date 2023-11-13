<template>
  <div class="init">
    <a-layout class="layout" theme="light">
      <div class="left">
        <router-link to="/home">
          <div class="logo">
            <img src="../assets/logo.png" />
          </div>
        </router-link>
        <a-menu class="menu" v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal">
          <router-link v-for="item in navBarList" :key="item.path" :to="item.path">
            <a-menu-item :key="item.path">{{ item.name }}</a-menu-item>
          </router-link>
        </a-menu>
      </div>
      <div class="right-control">
        <a-input-search class="search" v-model:value="value" placeholder="搜索" @search="onSearch" />
        <div v-if="isLogin" class="login">
          <router-link to="/login">
            <div class="m-l-8">登录</div>
          </router-link>
          <div class="m-l-8">或</div>
          <router-link to="/signup">
            <div class="m-l-8">注册</div>
          </router-link>
        </div>
        <div v-if="!isLogin" class="user">
          <a-dropdown overlayClassName="dropdown" placement="bottomRight" :trigger="['click']">
            <div class="avatar"><img :src="userInfo.avatar" alt=""></div>
            <template #overlay>
              <div class="user-card">
                <div class="user-info">
                  <div class="user-info-avatar"><img :src="userInfo.avatar" alt=""></div>
                  <div class="user-info-r">
                    <div class="user-name">{{ userInfo.name }}</div>
                    <div class="user-text">升级会员</div>
                  </div>
                </div>
                <div class="menu">
                  <router-link to="/user">
                    <div class="menu-item">
                      <UserOutlined class="menu-item-icon" />个人中心
                    </div>
                  </router-link>
                  <router-link to="/collection">
                    <div class="menu-item">
                      <StarOutlined class="menu-item-icon" />收藏
                    </div>
                  </router-link>
                  <div class="menu-item" @click="onClickLoginOut">
                    <LogoutOutlined class="menu-item-icon" />退出
                  </div>
                </div>
              </div>
            </template>
          </a-dropdown>
        </div>
      </div>
    </a-layout>
  </div>
</template>

<script lang='ts' setup>
import { useHomeStore } from '@/store/modules/home';
import { useUserStore } from '@/store/modules/user';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { UserOutlined, StarOutlined, LogoutOutlined } from '@ant-design/icons-vue';
const homeStore = useHomeStore()
const navBarList = homeStore.navBarList
const userStore = useUserStore()
const userInfo = userStore.userInfo
const route = useRoute()
const path = route.path
const router = useRouter()
const isLogin = ref(false)

const selectedKeys = ref<string[]>([]);
selectedKeys.value.push(path)
const value = ref<string>('');
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

const onClickLoginOut = () => {
  isLogin.value = true
  router.push('/home')
}

</script>

<style lang='less' scoped>
.m-l-8 {
  margin-left: 8px;
}

.init {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: #fff;
}

.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  background: #fff;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .logo {
      height: 22px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .menu {
      lineHeight: '64px'
    }
  }


  .right-control {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // width: 400px;
    padding: 0 20px;

    .search {
      width: 200px;
    }

    .login {
      display: flex;
      flex-direction: row;
    }

    .user {
      margin-left: 8px;
      cursor: pointer;

      .avatar {

        height: 1.5rem;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.dropdown {
  .user-card {
    box-sizing: border-box;
    margin-top: 10px;
    padding: 1rem;
    width: 200px;

    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04), 0px 10px 28px -4px rgba(0, 0, 0, 0.16);

    .user-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(228, 230, 235, 0.5);

      .user-info-avatar {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .user-info-r {
        margin-left: 0.5rem;

        .user-name {}

        .user-text {}
      }
    }

    .menu {
      .menu-item {
        cursor: pointer;
        padding: 8px 0.5rem;
        color: rgba(0, 0, 0, 0.55);
        border-radius: 0.5rem;

        &:hover {
          background: #f7f7f8;
        }

        .menu-item-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>