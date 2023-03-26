<template>
  <div id="userLayout">
    <div class="login_panel">
      <div class="login_panel_form">
        <div class="login_panel_form_title">
          <img class="login_panel_form_title_logo" :src="config.appLogo" alt>
          <p class="login_panel_form_title_p">{{ config.appName }}</p>
        </div>
        <el-form ref="loginForm" :model="loginFormData" :rules="rules" :validate-on-rule-change="false"
          @keyup.enter="submitForm">
          <el-form-item prop="username">
            <el-input v-model="loginFormData.username" size="large" placeholder="请输入用户名" suffix-icon="user" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginFormData.password" show-password size="large" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item v-if="loginFormData.openCaptcha" prop="captcha">
            <div class="vPicBox">
              <el-input v-model="loginFormData.captcha" placeholder="请输入验证码" size="large"
                style="flex:1;padding-right: 20px;" />
              <div class="vPic">
                <img v-if="picPath" :src="picPath" alt="请输入验证码" @click="loginVerify()">
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 46%" size="large" @click="checkInit">注 册</el-button>
            <el-button type="primary" size="large" style="width: 46%; margin-left: 8%" @click="submitForm">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_panel_right" />
      <div class="login_panel_foot">
        <div class="links">

          <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank">
            <img src="@/assets/github.png" class="link-icon" alt="github">
          </a>

        </div>
        <div class="copyright">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="Login">

import { captcha } from '@/api/user'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/pinia/modules/user'
import config from '@/config/index'

// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 5) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const checkPassword = (rule, value, callback) => {
  if (value.length < 6) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

// 获取验证码
const loginVerify = () => {
  captcha({}).then(async (ele) => {
    rules.captcha.push({
      max: ele.data.captchaLength,
      min: ele.data.captchaLength,
      message: `请输入${ele.data.captchaLength}位验证码`,
      trigger: 'blur',
    })
    picPath.value = ele.data.picPath
    loginFormData.captchaId = ele.data.captchaId
    loginFormData.openCaptcha = ele.data.openCaptcha
  })
}


loginVerify()

// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const loginFormData = reactive({
  username: 'admin',
  password: '123456',
  captcha: '',
  captchaId: '',
  openCaptcha: false,
})
const rules = reactive({
  username: [{ validator: checkUsername, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }],
  captcha: [
    {
      message: '验证码格式不正确',
      trigger: 'blur',
    },
  ],
})

const userStore = useUserStore()
const login = async () => {
  return await userStore.LoginIn(loginFormData)
}
const submitForm = () => {
  loginForm.value.validate(async (v) => {
    if (v) {
      const flag = await login()
      if (!flag) {
        loginVerify()
      }
    } else {
      ElMessage({
        type: 'error',
        message: '请正确填写登录信息',
        showClose: true,
      })
      loginVerify()
      return false
    }
  })
}

// 跳转初始化
const checkInit = async () => {
}

</script>



<style lang="scss" scoped>
#userLayout {
  margin: 0;
  padding: 0;
  background-image: url("@/assets/login_background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;

  .input-icon {
    padding-right: 6px;
    padding-top: 4px;
  }

  .login_panel {
    position: absolute;
    top: 3vh;
    left: 2vw;
    width: 96vw;
    height: 94vh;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .login_panel_right {
      background-image: url("@/assets/login_left.svg");
      background-size: cover;
      width: 40%;
      height: 60%;
      float: right !important;
    }

    .login_panel_form {
      width: 420px;
      background-color: #fff;
      padding: 40px 40px 40px 40px;
      border-radius: 10px;
      box-shadow: 2px 3px 7px rgba(0, 0, 0, .2);

      .login_panel_form_title {
        display: flex;
        align-items: center;
        margin: 30px 0;

        .login_panel_form_title_logo {
          width: 90px;
          height: 72px;
        }

        .login_panel_form_title_p {
          font-size: 40px;
          padding-left: 20px;
        }
      }

      .vPicBox {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .vPic {
        width: 33%;
        height: 38px;
        background: #ccc;

        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
    }

    .login_panel_foot {
      position: absolute;
      bottom: 20px;

      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .link-icon {
          width: 30px;
          height: 30px;
        }
      }

      .copyright {
        color: #777777;
        margin-top: 5px;
      }
    }
  }
}

//小屏幕不显示右侧，将登录框居中
@media (max-width: 750px) {
  .login_panel_right {
    display: none;
  }

  .login_panel {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .login_panel_form {
    width: 100%;
  }
}


/*
  powerBy : bypanghu@163.com
*/
</style>
