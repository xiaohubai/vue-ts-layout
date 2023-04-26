<template>
  <div>
    <el-breadcrumb>
      <template v-for="item in breadcrumb" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const Router = useRouter()
const breadcrumb: any = ref([])

const getBreadcrumb = (route: any) => {
  breadcrumb.value = []
  const matched: any = route.matched || []
  const length = Object.keys(matched).length
  if (length >= 1) {
    Object.values(matched).forEach((item: any) => {
      if (item.path && item.path !== '/layout') {
        let data: any = {
          path: item.path,
          name: item.name,
          title: item.meta.title
        }
        breadcrumb.value.push(data)
      }
    })
  }
}
watch(() => Router.currentRoute.value, (value: any) => { getBreadcrumb(value) }, { immediate: true, deep: true })
</script>

<style scoped lang="scss"></style>
