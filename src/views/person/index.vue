<template>
  <el-row :gutter="20" justify="center">
    <el-col :span="8">
      <el-card class="show-card">
        <div class="show-avatar"
          :style="{ 'background-image': `url(${avatar})`, 'background-repeat': 'no-repeat', 'background-size': 'cover' }">
          <span class="update" @click="upload">
            <el-icon>
              <edit />
            </el-icon>
            重新上传
          </span>
        </div>
        <div class="show-desc">
          <span class="show-desc-nickName">{{ nickName }} </span>
          <span class="show-desc-roleName">({{ roleName }})</span>
          <p class="show-desc-msg">
            {{ motto }}
          </p>
        </div>
        <div class="show-userInfo">
          <el-tabs tab-position="left">
            <el-tab-pane label="简介">
              <div>
                <el-text>
                  <el-icon>
                    <User />
                  </el-icon>
                  {{ userName }}
                </el-text>
              </div>
              <div>
                <el-text>
                  <el-icon>
                    <Timer />
                  </el-icon>
                  {{ birth }}
                </el-text>
              </div>
              <div>
                <el-text>
                  <el-icon>
                    <Phone />
                  </el-icon>
                  {{ phone }}
                </el-text>
              </div>
              <div>
                <el-text>
                  <el-icon>
                    <ChatDotRound />
                  </el-icon>
                  {{ wechat }}
                </el-text>
              </div>
              <div>
                <el-text>
                  <el-icon>
                    <Message />
                  </el-icon>
                  {{ email }}
                </el-text>
              </div>
              <div>
                <el-text>
                  <el-icon>
                    <Check />
                  </el-icon>
                  {{ dictInfo.state[state] }}
                </el-text>
              </div>
            </el-tab-pane>
            <el-tab-pane label="事件" />
            <el-tab-pane label="标签" />
          </el-tabs>
        </div>
      </el-card>
    </el-col>

    <el-col :span="15">
      <el-card>
        <div class="userInfoForm">
          <el-form model="form" label-position="left" label-width="auto" size="default">
            <el-form-item label="昵称" style="width:45%">
              <el-input v-model="form.nickName" />
            </el-form-item>
            <el-form-item label="出生日期">
              <el-date-picker v-model="form.birth" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
            </el-form-item>
            <el-form-item label="手机号" style="width:45%">
              <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码">
              <el-button type="primary" plain @click="showDialog">
                修改密码
              </el-button>
            </el-form-item>

            <el-form-item label="微信" style="width:45%">
              <el-input v-model="form.wechat" />
            </el-form-item>
            <el-form-item label="邮箱" style="width:45%">
              <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="座右铭">
              <el-input v-model="form.motto" type="textarea" />
            </el-form-item>
            <div class="onSubmitBtn">
              <el-button type="primary" @click="onSubmit">
                确 认
              </el-button>
            </div>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-dialog v-model="dialogVisible" :before-close="handleClose" title="修改密码">
    <el-form v-if="dialogVisible" :model="pwdForm" :rules="rules" label-width="120px">
      <el-form-item label="当前密码" prop="oldPwd" style="width:70%">
        <el-input v-model="pwdForm.oldPwd" show-password type="password" placeholder="输入当前密码" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd" style="width:70%">
        <el-input v-model="pwdForm.newPwd" show-password type="password" placeholder="输入新密码" />
      </el-form-item>
      <el-form-item label="确认密码" prop="newPwdAgain" style="width:70%">
        <el-input v-model="pwdForm.newPwdAgain" show-password type="password" placeholder="再次输入新密码" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">
          取 消
        </el-button>
        <el-button type="primary" @click="submitDialog">
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="Person">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/pinia/modules/user'
import { useDictStore } from '@/pinia/modules/dict'
import { updateUserInfo, updatePassword, getUserInfo } from '@/api/user'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()
const dictStore = useDictStore()
const {
  userName,
  avatar,
  nickName,
  roleName,
  motto,
  birth,
  phone,
  wechat,
  email,
  state
} = storeToRefs(userStore)

const { UID } = storeToRefs(userStore)
const { dictInfo } = storeToRefs(dictStore)

const dialogVisible = ref(false)
const form = ref({
  nickName: '',
  motto: '',
  birth: '',
  phone: '',
  wechat: '',
  email: '',
  userName: '',
  avatar: '',
  roleName: '',
  state: 0
})

const upload = () => {

}

const pwdForm = ref({
  UID: UID.value,
  oldPwd: '',
  newPwd: '',
  newPwdAgain: ''
})
const init = () => {
  pwdForm.value = {
    UID: UID.value,
    oldPwd: '',
    newPwd: '',
    newPwdAgain: ''
  }
}
const rules = reactive({
  oldPwd: [{ required: true, message: '必填', trigger: 'blur' }, { min: 6, message: '最少6个字符', trigger: 'blur' }],
  newPwd: [{ required: true, message: '必填', trigger: 'blur' }, { min: 6, message: '最少6个字符', trigger: 'blur' }],
  newPwdAgain: [{ required: true, message: '请输入确认密码', trigger: 'blur' }, { min: 6, message: '最少6个字符', trigger: 'blur' },
  {
    validator: (rule, value, callback) => {
      if (value !== pwdForm.value.newPwd) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }]
})

const getData = async () => {
  const res: any = await getUserInfo()
  if (res.code === 0) {
    form.value = {
      nickName: res.data.nickName,
      motto: res.data.motto,
      birth: res.data.birth,
      phone: res.data.phone,
      wechat: res.data.wechat,
      email: res.data.email,
      userName: res.data.userName,
      avatar: res.data.avatar,
      roleName: res.data.roleName,
      state: res.data.state
    }
  } else {
    ElMessage({ type: 'error', message: '获取用户失败' + res.msg })
  }
}

getData()

const onSubmit = async () => {
  const res: any = await updateUserInfo({
    UID: UID.value,
    nickName: form.value.nickName,
    motto: form.value.motto,
    birth: form.value.birth,
    phone: form.value.phone,
    wechat: form.value.wechat,
    email: form.value.email
  })
  if (res.code === 0) {
    userStore.setUserInfo(form.value)
    ElMessage({ type: 'success', message: '更新用户信息成功' })
  } else {
    ElMessage({ type: 'error', message: '更新用户信息失败' + res.msg })
  }
  getData()
}
const submitDialog = async () => {
  const res: any = await updatePassword({
    UID: pwdForm.value.UID,
    oldPassword: pwdForm.value.oldPwd,
    newPassword: pwdForm.value.newPwd
  })
  if (res.code === 0) {
    ElMessage({ type: 'success', message: '更新密码成功' })
    dialogVisible.value = false
    userStore.LoginOut()
  } else {
    ElMessage({ type: 'error', message: res.msg })
  }
}

const showDialog = () => {
  init()
  dialogVisible.value = true
}
const handleClose = (done) => {
  dialogVisible.value = false
  done()
}

const closeDialog = () => {
  dialogVisible.value = false
}

</script>

<style lang="scss" scoped>
.onSubmitBtn {
  display: flex;
  justify-content: right;
  margin-right: 14px;

}

.show-avatar {
  width: 120px;
  height: 120px;
  line-height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%),
      radial-gradient(at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%) #989898;
    background-blend-mode: multiply, multiply;

    .update {
      color: #fff;
    }
  }

  .update {
    height: 120px;
    width: 120px;
    text-align: center;
    color: transparent;
  }
}

.show-desc {
  margin-top: 20px;
  text-align: center;

  .show-desc-nickName {
    font-weight: 800;
    font-size: 20px;
  }

  .show-desc-roleName {
    margin-left: 10px;
    font-size: 12px;
  }

  .show-desc-msg {
    color: #999;
  }
}

.show-userInfo {
  margin-top: 30px;

}
</style>
