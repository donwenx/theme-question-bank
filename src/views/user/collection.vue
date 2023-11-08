<template>
  <div class="collection">
    <div class="head">
      <div></div>
      <div @click="onClickCreate" class="create">+ 新建收藏夹</div>
    </div>
    <div class="list">
      <div class="item" v-for="item in collection" :key="item.id">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <div>{{ item.updateTime }} 更新 · {{ item.count }}篇文章</div>
          </div>
        </div>
        <div class="right">
          <div class="edit" @click="showModal(item)">
            <EditOutlined class="icon" />编辑
          </div>
          <div class="delete" @click="onClickDelete(item.id)">
            <DeleteOutlined class="icon" />删除
          </div>
        </div>
      </div>
    </div>
  </div>

  <a-modal v-model:open="open" title="编辑收藏夹" @ok="onClickEdit">
    <a-form ref="collectionEditForm" :model="formState" name="basic" autocomplete="off" @finish="onFinish">
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
  </a-modal>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { createVNode, onMounted, reactive, ref } from 'vue';

const user = useUserStore()
const collection = user.userInfo.collect

const onClickDelete = (id: number) => {
  console.log('删除', id)
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
      console.log('Cancel');
    },
    class: 'confirm',
  });
}

// 新增弹窗
const open = ref<boolean>(false);
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

const collectionEditForm = ref()

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onClickCreate = () => {
  formState.id = 0
  formState.title = ''
  formState.describe = ''
  formState.public = 1
  open.value = true
}

// 编辑弹窗
const showModal = (item: any) => {
  open.value = true;
  formState.title = item.title
  formState.describe = item.describe
  formState.public = item.public
  formState.id = item.id
};
const onClickEdit = async (id: number) => {
  console.log(id);
  console.log(collectionEditForm.value)
  await collectionEditForm.value.validate()
  open.value = false;
};

onMounted(() => {
  console.log('xxxxx')

})
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
