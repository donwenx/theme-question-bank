<template>
  <div class="editor">
    <a-input v-model:value="editorValue" placeholder="输入框" />
    <div class="editor-option">
      <div class="editor-option-l"><PictureOutlined /></div>
      <div class="editor-option-r"><a-button type="primary">发送</a-button></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PictureOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'

// 输入框组件
const editorValue = ref('')
</script>
<style lang="less" scoped>
.editor {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 150px;
  max-height: 300px;
  padding: 20px;
  flex: 1;
  border-radius: 0.5rem;
  border: 1px solid f2f3f5;
  background-color: #f2f3f5;

  // &:hover {
  //   background-color: #e4e6eb;
  //   border: 1px solid rgba(10, 132, 255, 1);
  // }

  &:active {}

  .editor-option {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .editor-option-l {}

    .editor-option-r {}

  }
}
</style>