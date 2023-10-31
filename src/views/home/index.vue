<template>
  <div class="container">
    <div class="home">
      首页
      {{ store.count }}
      <button @click="onClick">+1</button>
      <button @click="onClickDoubleCount">+2</button>
    </div>
    <Calendar />
  </div>
</template>

<script lang="ts" setup>
import Calendar from '@/components/Calendar.vue'
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
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .home {
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
}
</style>
