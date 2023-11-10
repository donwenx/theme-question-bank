<template>
  <div class="collection-edit">
    <a-form ref="collectionEditForm" :model="formState" name="basic" autocomplete="off">
      <a-form-item label="名称" name="title" :rules="[{ required: true, message: '请输入名称!' }]">
        <a-input v-model:value="formState.title" placeholder="请输入收藏夹名称" />
      </a-form-item>

      <a-form-item label="描述" name="describe" :rules="[{ required: true, message: '请输入描述!' }]">
        <a-textarea :rows="4" v-model:value="formState.describe" placeholder="请输入收藏夹描述" />
      </a-form-item>


      <a-form-item label="可见性" :rules="[{ required: true, message: '请选择可见性!' }]">
        <a-radio-group v-model:value="formState.public">
          <a-radio :value="1">公开</a-radio>
          <a-radio :value="2">隐私</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch, defineExpose, onMounted } from 'vue';
interface FormState {
  id: number;
  title: string;
  describe: string;
  public: number;
}
interface Props {
  // open: boolean
  formState: FormState
}

const props = defineProps<Props>()

const collectionEditForm = ref()

const formState = ref(props.formState)
watch(props, () => {
  formState.value = props.formState
})
// 校验函数
const validate = async () => {
  await collectionEditForm.value.validate()
  console.log('校验函数')
}
const resetState = async () => {
  await collectionEditForm.value.resetFields()
  await collectionEditForm.value.clearValidate()
}

defineExpose({
  validate,
  resetState,
})
onMounted(() => {
  formState.value = props.formState
})
</script>
<style lang="less" scoped>
.collection-edit {}
</style>
