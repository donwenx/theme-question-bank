<template>
  <a-layout class="layout" theme="light">
    <NavBar class="navbar" />
    <a-layout-content class="content">
      <router-view></router-view>
      <SubMenu />
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script lang='ts' setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import SubMenu from '../components/SubMenu.vue'
</script>

<style lang='less' scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  .navbar {
  }
  .content {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>