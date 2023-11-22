<template>
  <div id="cls-login">
    <div class="cls-login-panel">
      <div class="cls-login-left">
        <div class="cls-login-left-logo">
          <img class="cls-login-left-logo-img" :src="logo.img">
          <p class="cls-login-left-logo-title">
            {{ logo.name }}
          </p>
        </div>
        <div class="cls-login-left-form">
          <el-form ref="ruleFormRef" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input v-model="form.username" size="large" placeholder="请输入用户名" suffix-icon="user" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" show-password size="large" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="captcha">
              <div class="cls-login-left-form-captcha">
                <el-input v-model="form.captcha" placeholder="请输入验证码" size="large" style="flex:1;padding-right: 20px;" />
                <div class="cls-login-left-form-captcha-img">
                  <img :src="captchaImg" alt="请输入验证码" @click="getCaptcha()">
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 46%" size="large" @click="register">
                注 册
              </el-button>
              <el-button type="primary" size="large" style="width: 46%; margin-left: 8%"
                @click="submitLoginForm(ruleFormRef)">
                登 录
              </el-button>
            </el-form-item>
          </el-form>

        </div>
      </div>
      <div class="cls-login-right" />
    </div>
  </div>
</template>

<script setup lang="ts" name="logins">
import { ref, reactive } from 'vue'
import { captcha } from '@/api/user'
import { useUserStore } from '@/pinia/modules/user'
import type { FormInstance, FormRules } from 'element-plus'

const logo = {
  img: import.meta.env.VITE_LOGO_IMG,
  name: import.meta.env.VITE_LOGO_NAME
}

const ruleFormRef = ref<FormInstance>()

const userStore = useUserStore()

const form = ref({
  username: 'admin',
  password: '123456',
  captcha: '',
  captchaID: ''
})
const captchaImg = ref('')

const rules = reactive<FormRules>({
  username: [{ required: true, message: '必填', trigger: 'blur' }],
  password: [{ required: true, message: '必填', trigger: 'blur' },
  { min: 6, message: '最少6个字符', trigger: 'blur' },
  {
    validator: (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入大于6位字符的密码'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }],
  captcha: [{ required: true, message: '必填', trigger: 'blur' },
  { min: 6, message: '请输入6位验证码', trigger: 'blur' },
  {
    validator: (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入6位验证码'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }]
})

const getCaptcha = async () => {
  const res: any = await captcha()
  if (res.code == 0) {
    captchaImg.value = res.data.picPath
    form.value.captchaID = res.data.captchaID
  }
}
getCaptcha()

const submitLoginForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  let valid = await formEl.validate((valid) => { return valid })
  if (!valid) {
    getCaptcha()
    return
  }
  const ok: any = await userStore.LoginIn(form.value)
  if (!ok) {
    getCaptcha()
    return false
  }
  return true
}


const register = () => {
}

</script>

<style lang="scss" scoped>
#cls-login {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url("@/assets/login_background.jpg");

  .cls-login-panel {
    display: flex;
    width: 96%;
    height: 94%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, .8);
    justify-content: space-around;
    align-items: center;


    .cls-login-left {
      display: flex;
      width: 500px;
      height: 500px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 2px 3px 7px rgba(0, 0, 0, .2);
      flex-direction: column;

      .cls-login-left-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
        margin-top: 100px;
        margin-bottom: 30px;

        .cls-login-left-logo-img {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90px;
        }

        .cls-login-left-logo-title {
          margin-left: 16px;
          justify-content: center;
          align-items: center;
          display: flex;
          height: 90px;
          font-size: 40px;

        }
      }

      .cls-login-left-form {
        display: flex;
        justify-content: center;
        align-items: center;


        .cls-login-left-form-captcha {
          display: flex;
          justify-content: space-between;

          .cls-login-left-form-captcha-img {
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

      }
    }

    .cls-login-right {
      display: flex;
      background-size: cover;
      width: 40%;
      height: 60%;
      background-image: url("@/assets/login-right.svg");
    }
  }

}
</style>