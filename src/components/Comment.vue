<template>
  <div class="comment-list">
    <div class="comment-item" v-for="(item, index) in info" :key="item.id">
      <div class="comment-avatar">
        <img src="/img/avatar.jpg" alt="">
      </div>
      <div class="comment-wrapper">
        <div class="comment-header">{{ item.name }}</div>
        <div class="comment-content">{{ item.comment }}</div>
        <div class="comment-action">
          <div class="comment-action-l">
            <div class="action-time">{{ item.time }}</div>
            <div class="action-digg" @click="onClickLike(item, index)">
              <LikeOutlined class="action-icon-mr4 " :class="{ 'action-text': likeClick.get(index) }" />{{ item.like }}
            </div>
            <div class="action-reply" :class="{ 'action-text': replyClick.get(index) }"
              @click.stop="onClickReply(item, index)">
              <MessageOutlined class="action-icon-mr4" />
              <div v-if="!item.replyCount">回复</div>
              <div v-if="item.replyCount">{{ item.replyCount }}</div>
            </div>
          </div>
          <div class="more-action">
            <EllipsisOutlined />
          </div>
        </div>

        <div class="reply-editor" v-show="replyClick.get(index)">
          回复对话框
        </div>
        <!-- 回复内容 -->
        <div class="comment-reply-wrapper">
          <!-- <Comment></Comment> -->

          <!-- 查看更多 -->
          <div class="top-has-more">查看全部 {{ item.replyCount }} 条回复</div>
        </div>
      </div>
    </div>
    <div class="comment-item">第2条</div>
  </div>
</template>
<script lang='ts' setup>
import { EllipsisOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
let info = reactive([
  {
    id: '1',
    name: 'dxkite',
    comment: '收藏=学会',
    time: '2023-12-09',
    like: 123,
    replyCount: 10,
    children: [],
  },
])
let likeClick = ref<Map<number, boolean>>(new Map())
let replyClick = ref<Map<number, boolean>>(new Map())

const onClickReply = (item: unknown, index: number) => {
  if (replyClick.value.get(index) === true) {
    replyClick.value.set(index, false)
    return
  }
  replyClick.value.set(index, true)
  console.log('点击弹出回复框', item)
}
const onClickLike = (item: unknown, index: number) => {
  if (likeClick.value.get(index) === true) {
    info[index].like--
    likeClick.value.set(index, false)
    return
  }
  info[index].like++
  likeClick.value.set(index, true)
  console.log('点赞', item)
}
</script>
<style lang="less" scoped>
.action-text {
  color: #1171ee;
}

.comment-list {
  margin-top: 20px;

  .comment-item {
    display: flex;
    width: 100%;
    padding: 16px 0;

    .comment-avatar {
      width: 36px;
      height: 36px;
      margin-right: 16px;
      border-radius: 50%;
      overflow: hidden;

      img {
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }

    .comment-wrapper {
      flex: 1;

      .comment-header {
        font-size: 16px;
        line-height: 24px;
        color: #515767;
        font-weight: 400;
        cursor: pointer;
      }

      .comment-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 4px;
        font-size: 16px;
        color: #252933;
        line-height: 28px;
        font-weight: 400;

        .user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-right: 4px;

          .user-name {
            color: #515767;
            font-size: 14px;
            font-weight: 400;
            margin-right: 4px;
            cursor: pointer;
          }

          .author-tag {
            margin-left: 4px;
          }
        }
      }

      .comment-action {
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #8a919f;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        .comment-action-l {
          display: flex;
          flex-direction: row;
        }

        .action-time {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }

        .action-digg {
          display: flex;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;

          &:hover {
            color: #1171ee;
          }
        }

        .action-reply {
          display: flex;
          flex-direction: row;
          padding: 0 10px;
          cursor: pointer;

          &:hover {
            color: #1171ee;
          }
        }

        .more-action {
          cursor: pointer;

          &:hover {
            color: #1171ee;
          }
        }

        .action-icon-mr4 {
          margin-right: 4px;
        }
      }

      .comment-reply-wrapper {}

      .top-has-more {
        cursor: pointer;

        &:hover {
          color: #1171ee;
        }
      }
    }
  }
}
</style>
