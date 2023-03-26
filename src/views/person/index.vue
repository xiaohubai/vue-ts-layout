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
          <p class="show-desc-msg">{{ motto }}</p>
        </div>
        <div class="show-userInfo">
          <el-tabs tab-position="left">
            <el-tab-pane label="简介">
            </el-tab-pane>
            <el-tab-pane label="事件"></el-tab-pane>
            <el-tab-pane label="标签"></el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </el-col>

    <el-col :span="15">
      <el-card>

        用户信息编辑

      </el-card>
    </el-col>
  </el-row>
</template>


<script setup lang="ts" name="Person">
import { useUserStore } from '@/pinia/modules/user';

import { storeToRefs } from 'pinia';
const userStore = useUserStore()

const { avatar, nickName, roleName, motto } = storeToRefs(userStore)
const upload = () => {

}


</script>

<style lang="scss" scoped>
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
  width: 120px;

}
</style>
