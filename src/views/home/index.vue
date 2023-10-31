<template>
  <div class="home">
    首页
    {{ store.count }}
    <button @click="onClick">+1</button>
    <button @click="onClickDoubleCount">+2</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { computed } from 'vue';

const store = useUserStore()
const onClick = () => {
  store.increment()
}
const onClickDoubleCount = () => {
  store.double
}
// const doubleValue = computed(() => store.double)
// const doubleValue = store.double
</script>
<style>
.home {
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
</style>
