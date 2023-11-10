<template>
  <div class="collectionDetails">
    <div class="head">
      <div class="text">前端学习</div>
      <div class="operate">
        <div class="edit" @click.stop="showModal">
          <EditOutlined class="icon" />编辑
        </div>
        <div class="delete" @click.stop="onClickDelete">
          <DeleteOutlined class="icon" />删除
        </div>
      </div>
    </div>
    <div class="container">
      {{ params }}
    </div>
  </div>
  <a-modal v-model:open="open" title="编辑收藏夹" @ok="onClickEdit">
    <CollectionEdit ref="edit" :formState="formState"></CollectionEdit>
  </a-modal>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import CollectionEdit from './components/CollectionEdit.vue'
import { useCollectStore } from '@/store/modules/collect';

const route = useRoute()
const params = route.params
const collect = useCollectStore()
const collectionDetails = collect.collectionDetails[params.id as any as number]

// 编辑弹窗
const showModal = (item: any) => {
  open.value = true;
  nextTick(() => {
    edit.value.resetState()
    formState.title = collectionDetails.title
    formState.describe = collectionDetails.describe
    formState.public = collectionDetails.public
    formState.id = collectionDetails.id
  })
};
const onClickDelete = () => {
  console.log('click delete', collectionDetails.id)
}
// 新增弹窗
const open = ref<boolean>(false);
const edit = ref()
interface FormState {
  id: number;
  title: string;
  describe: string;
  public: number;
}
const formState = reactive<FormState>({
  id: 0,
  title: '',
  describe: '',
  public: 1,
});
const onClickEdit = async () => {
  console.log(formState);
  try {
    // 校验
    await edit.value.validate()
    open.value = false
  } catch (error) {
    console.log(error)
  }

};
onMounted(() => {
  console.log(params)
})
</script>
<style lang="less" scoped>
.collectionDetails {
  background: #fff;
  border-radius: 8px;
  padding: 20px;

  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .text {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .operate {
      display: flex;
      flex-direction: row;

      .edit {
        margin-right: 20px;

        &:hover {
          color: #0a84ff;
        }
      }

      .delete {
        &:hover {
          color: #0a84ff;
        }
      }

      .icon {
        margin-right: 4px;
      }
    }
  }

  .container {
    margin-top: 20px;
  }
}
</style>
