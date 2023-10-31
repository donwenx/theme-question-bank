<template>
  <div class="init">
    <a-layout class="layout" theme="light">
      <div class="left">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <a-menu class="menu" v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal">
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </div>
      <div class="right-control">用户中心</div>
    </a-layout>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);

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