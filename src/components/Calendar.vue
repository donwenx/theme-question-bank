<template>
  <div class="calendar">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Dayjs } from 'dayjs';
import dayjs from'dayjs'; 
import 'dayjs/locale/zh-cn'; 
dayjs.locale('zh-cn');

const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};
</script>
<style lang="less" scoped>
.calendar {
  width: 300px;
  height: 300px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>
