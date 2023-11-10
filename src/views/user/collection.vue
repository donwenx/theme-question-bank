<template>
  <div class="collection">
    <div class="head">
      <div></div>
      <div @click="onClickCreate" class="create">+ 新建收藏夹</div>
    </div>
    <div class="list">
      <div class="item" v-for="item in collection" :key="item.id" @click="onClickItem(item)">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <div>{{ item.updateTime }} 更新 · {{ item.count }}篇文章</div>
          </div>
        </div>
        <div class="right">
          <div class="edit" @click.stop="showModal(item)">
            <EditOutlined class="icon" />编辑
          </div>
          <div class="delete" @click.stop="onClickDelete(item.id)">
            <DeleteOutlined class="icon" />删除
          </div>
        </div>
      </div>
    </div>
  </div>

  <a-modal v-model:open="open" title="编辑收藏夹" @ok="onClickEdit">
    <CollectionEdit ref="edit" :formState="formState"></CollectionEdit>
  </a-modal>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { createVNode, nextTick, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import CollectionEdit from './components/CollectionEdit.vue'

const router = useRouter()
const user = useUserStore()
const collection = user.userInfo.collect

const onClickDelete = (id: number) => {
  Modal.confirm({
    title: '你确定要删除吗?',
    icon: createVNode(ExclamationCircleOutlined),
    content: '删除收藏集同时也会移除收藏集中内容',
    cancelText: '取消',
    okText: '确定',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      // console.log('Cancel');
    },
    class: 'confirm',
  });
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

const onClickCreate = () => {
  open.value = true
  nextTick(() => {
    edit.value.resetState()
  })
}

// 编辑弹窗
const showModal = (item: any) => {
  open.value = true;
  nextTick(() => {
    edit.value.resetState()
    formState.title = item.title
    formState.describe = item.describe
    formState.public = item.public
    formState.id = item.id
  })
};

const onClickItem = (item: any) => {
  const path = `/collection/${item.id}`
  router.push(path)
}

</script>
<style lang="less" scoped>
.collection {
  box-sizing: border-box;
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 0.5rem;

  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .create {
      color: #0a84ff;
      cursor: pointer;
    }
  }

  .list {
    margin-top: 8px;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      cursor: pointer;

      &+.item {
        border-top: 1px solid rgba(229, 229, 229, 1);
      }

      &:hover .title {
        color: #999;
      }

      &:hover .right {
        display: flex;
      }

      .left {
        color: #252933;

        .title {
          font-size: 1.2em;
        }

        .info {
          margin-top: 8px;
          font-size: 1em;
          color: #999;
        }
      }

      .right {
        display: none;
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
  }
}
</style>
