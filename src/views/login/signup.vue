<template>
  <div class="signup">
    <div class="container">
      <div class="title-column">
        <div class="logo"><img src="../../assets/logo.png" alt=""></div>
        <div class="title">资源管理器</div>
      </div>

      <div class="form">
        <!-- 账号注册 -->
        <div v-show="!isEmail">
          <div class="title">帐号密码登录</div>
          <a-form ref="formRef" :rules="rules" :model="formState" name="basic" autocomplete="off" @finish="onFinish"
            @finishFailed="onFinishFailed">
            <a-form-item name="username" ref="username">
              <a-input class="input" v-model:value="formState.username" placeholder="请输入账号" />
            </a-form-item>

            <a-form-item name="password" ref="password">
              <a-input-password class="input" v-model:value="formState.password" placeholder="请输入密码" />
            </a-form-item>

            <a-form-item>
              <a-button class="submit" type="primary" html-type="submit">登录/注册</a-button>
            </a-form-item>
          </a-form>
        </div>

        <!-- 邮箱注册 -->
        <div v-show="isEmail" class="email">
          <a-form ref="emailFormRef" :rules="emailRules" :model="emailFormState" name="basic" autocomplete="off"
            @finish="onEmailFinish" @finishFailed="onFinishFailed">
            <a-form-item name="email" ref="email">
              <a-input class="input" v-model:value="emailFormState.email" placeholder="请输入邮箱" />
            </a-form-item>

            <a-form-item name="code" ref="code">
              <a-input class="input" v-model:value="emailFormState.code" placeholder="请输入验证码">
                <template #addonAfter>
                  <div @click="getCode">
                    获取验证码
                  </div>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-button class="submit" type="primary" html-type="submit">登录/注册</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>

      <div class="tips">
        <div class="email-signup">
          <div v-show="!isEmail" @click="onClickEmail">邮箱注册</div>
          <div v-show="isEmail" @click="onClickAccount">账号注册</div>
        </div>
        <router-link v-show="!isEmail" to="/reset" class="forget">忘记密码</router-link>
      </div>

      <div class="footer">
        注册或登录即代表您同意《用户协议》和《隐私协议》
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import { useRouter } from 'vue-router';

const router = useRouter()

const isEmail = ref(false)

// 账号
interface FormState {
  username: string;
  password: string;
}

const rules: Record<string, Rule[]> = {
  username: [
    { required: true, message: '请输入账号', trigger: 'change' },
    { min: 2, max: 20, message: '长度应在2-20个字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 3, max: 20, message: '长度应在3-20个字符之间', trigger: 'blur' },
  ],
};

const formRef = ref()
const formState = reactive<FormState>({
  username: '',
  password: '',
});

const onFinish = async () => {
  await formRef.value.validate()
  console.log('values', formState, toRaw(formState));
  // 发送请求，成功，跳转首页
  // router.push('home')
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// 邮箱登录
interface EmailFormState {
  email: string;
  code: string;
}

const emailRules: Record<string, Rule[]> = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'change' },
    { min: 2, max: 20, message: '长度应在2-20个字符之间', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入验证码' },
    { min: 3, max: 20, message: '长度应在3-20个字符之间', trigger: 'blur' },
  ],
};
const emailFormRef = ref()
const emailFormState = reactive<EmailFormState>({
  email: '',
  code: '',
});

const onEmailFinish = async () => {
  await emailFormRef.value.validate()
  console.log('values', emailFormState, toRaw(emailFormState));
  // 发送请求，成功，跳转首页
  // router.push('home')
};

const getCode = () => {
  console.log('获取验证码')
}


const onClickEmail = () => {
  isEmail.value = true
}
const onClickAccount = () => {
  isEmail.value = false
}
</script>

<style lang="less" scoped>
.signup {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 384px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 10px 22px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background: #fff;

  .container {
    padding: 24px 32px 32px;

    .title-column {
      display: flex;
      flex-direction: row;

      .logo {
        height: 38px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-left: 8px;
        font-size: 28px;
      }
    }

    .form {
      margin-top: 20px;

      .title {
        margin: 32px 0 24px;
        font-size: 20px;
      }

      .input {
        height: 48px;

        // 优化验证码高度
        .ant-input-group  {
          height: 100%;
        }
      }

      .submit {
        width: 100%;
        height: 48px;
      }
    }

    .tips {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .email-signup {
        cursor: pointer;
        color: rgba(38, 38, 38, 0.75);
      }

      .forget {
        cursor: pointer;
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      font-size: 12px;
      color: rgba(38, 38, 38, 0.75);
    }
  }
}
</style>
