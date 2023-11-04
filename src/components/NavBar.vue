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
          <router-link to="/user">
            个人中心
          </router-link>
        </div>
      </div>
    </a-layout>
  </div>
</template>

<script lang='ts' setup>
import { useHomeStore } from '@/store/modules/home';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const store = useHomeStore()
const navBarList = store.navBarList
const route = useRoute()
const isLogin = ref(false)

const selectedKeys = ref<string[]>([route.path]);
const value = ref<string>('');
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

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
    }
  }
}
</style>