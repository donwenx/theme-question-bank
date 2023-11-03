<template>
  <a-layout class="layout" theme="light">
    <NavBar class="navbar" />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer class="footer" />
  </a-layout>
</template>

<script lang='ts' setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<style lang='less' scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  .navbar {
  }
  .content {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    padding: 20px 0;
  }
  .footer {
  }
}
</style>