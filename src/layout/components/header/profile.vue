<template>
    <div>
        <el-dropdown>
            <div class="cls-avatar">
                <img class="cls-img" v-if="avatar" :src="avatar" :alt="nickName">
                <span class="cls-text" v-if="nickName" style="font-size: 1px">
                    {{ nickName }}
                </span>
                <el-icon class="cls-icon" v-if="nickName">
                    <ArrowDown />
                </el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item icon="avatar">{{ roleName }}</el-dropdown-item>
                    <el-dropdown-item icon="User" @click="toPerson">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="SwitchButton" @click="userStore.LoginOut">登 出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>


<script setup lang="ts" name="Perfile">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/pinia/modules/user';
const router = useRouter()
const userStore = useUserStore()
const { nickName, avatar, roleName } = storeToRefs(userStore)

const toPerson = () => {
    router.push({ name: 'person' })
}

</script>

<style lang="scss" scoped>
.cls-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .cls-img {
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        margin-right: 10px;
    }

    .cls-text {
        color: #333;
        margin-right: 5px;
    }

    .cls-icon {
        margin-top: 4px;
    }
}
</style>