<template>
  <div class="topic">
    <div class="operate">
      <div class="item" @click="onClickCollect">
        <div v-if="!isCollect">
          <StarOutlined />
        </div>
        <div v-if="isCollect" class="color-action">
          <StarFilled />
        </div>
      </div>
      <a-badge count="22" :number-style="numberStyle">
        <div class="item">
          <CommentOutlined />
        </div>
      </a-badge>
      <div class="item">
        <VerticalAlignTopOutlined />
      </div>
      <div class="mode">背题模式</div>
    </div>
    <div class="container">
      <div class="content">
        <div class="header">
          <div class="title">中级前端必备知识点</div>
          <div class="sub-title">
            <div class="sub-title-item sub-title-name">作者namexxxxxxxxxxxxxxxxxxxxxx</div>
            <div class="sub-title-item">2023-10-19</div>
            <div class="sub-title-item">
              <EyeOutlined class="sub-title-item-icon" />5,468
            </div>
            <div class="sub-title-item">难度: star</div>
          </div>
        </div>
        <div class="answer">
          回答
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem nesciunt, debitis culpa error amet,
          deserunt architecto similique odit illum fugit delectus adipisci nobis repellat numquam a vitae explicabo
          assumenda!
        </div>
      </div>
      <div class="comment">
        <div class="comment-title">
          评论区 2
        </div>
        <div class="editor">
          <div class="avatar"><img src="/img/avatar.jpg"></div>
          <div class="editor-container">
            <Editor></Editor>
          </div>
        </div>
        <div class="list">
          <div class="list-header">
            <div class="list-header-item" :class="{ 'list-header-item-active': commentState == 'new' }"
              @click="onClickNew">
              最新</div>
            <div class="list-header-line">|</div>
            <div class="list-header-item" :class="{ 'list-header-item-active': commentState == 'hot' }"
              @click="onClickHot">
              最热</div>
          </div>
          <!-- 评论内容 -->
          <Comment></Comment>
        </div>
      </div>
    </div>
    <div class="topic-r">
      <div class="user">
        作者信息
      </div>
      <div class="directory">目录</div>
      <div class="related">相关推荐</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { StarOutlined, StarFilled, CommentOutlined, VerticalAlignTopOutlined, EllipsisOutlined, EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Editor from '../../components/Editor.vue'
import Comment from '../../components/Comment.vue'

const route = useRoute()

const params = route.params
const query = route.query
const topic = ref({ name: '1' })
const isCollect = ref(false)
const numberStyle = ref({
  background: '#c2c8d1',
  color: '#fff',
})

const onClickCollect = () => {
  isCollect.value = !isCollect.value
}

// 操作评论区 最新，最热状态, 默认最新
const commentState = ref('new')
const onClickNew = () => {
  commentState.value = 'new'
  console.log('点击最新内容')
}
const onClickHot = () => {
  commentState.value = 'hot'
  console.log('点击最热内容')
}
onMounted(() => {
  console.log(params, query)
})
</script>
<style lang="less" scoped>
.topic {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .operate {
    .color-action {
      color: rgba(10, 132, 255, 1);
    }

    .item {
      margin-bottom: 1rem;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      color: rgba(0, 0, 0, 0.6);
      background-color: #fff;
      background-position: 50%;
      background-repeat: no-repeat;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgba(50, 50, 50, .04);
      cursor: pointer;
      text-align: center;
      font-size: 1.2rem;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(10, 132, 255, 1);
      }
    }

    .mode {
      cursor: pointer;

      &:hover {
        color: rgba(10, 132, 255, 1);
      }
    }
  }

  .container {
    padding: 0 20px;
    flex: 1;

    .content {
      padding: 20px;
      background: #fff;
      border-radius: 0.5rem;

      .header {
        .title {
          font-size: 2.6rem;
          font-weight: 600;
          color: #252933;
          margin-bottom: 1.3rem;
        }

        .sub-title {
          display: flex;
          flex-direction: row;

          .sub-title-item {
            margin-right: 16px;
            color: #8a919f;

            .sub-title-item-icon {
              margin-right: 5px;
            }
          }

          .sub-title-name {
            max-width: 160px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #515767;
            cursor: pointer;

            &:hover {
              color: rgba(10, 132, 255, 1);
            }
          }
        }
      }

      .answer {
        margin-top: 20px;
      }
    }

    .comment {
      margin-top: 20px;
      padding: 20px;
      background: #fff;
      border-radius: 0.5rem;

      .comment-title {
        display: flex;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
      }

      .editor {
        display: flex;
        margin-top: 32px;

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 16px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .editor-container {
          width: 100%;
        }
      }

      .list {
        margin-top: 20px;

        .list-header {
          display: flex;
          flex-direction: row;

          .list-header-item {
            font-size: 16px;
            cursor: pointer;
            color: #515767;
          }

          .list-header-item-active {
            color: rgba(10, 132, 255, 1);
          }

          .list-header-line {
            color: #e4e6eb;
            padding: 0 8px;
          }
        }


      }
    }
  }

  .topic-r {
    .directory {}

    .related {}
  }
}
</style>
