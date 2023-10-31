<template>
  <div class="init">
    <a-layout class="layout" theme="light">
      <div class="left">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <a-menu class="menu" v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal">
          <router-link v-for="item in navBarList" :key="item.path" :to="item.path">
            <a-menu-item :key="item.path">{{ item.name }}</a-menu-item>
          </router-link>
        </a-menu>
      </div>
      <div class="right-control">用户中心</div>
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

const selectedKeys = ref<string[]>([route.path]);

</script>

<style lang='less' scoped>
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
    width: 200px;
  }
}
</style>