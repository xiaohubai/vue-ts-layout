<template>
  <div class="cls-about">
    <el-card>
      <h4 class="title">简介</h4>
      <span class="text">
        <el-link type="primary" href="https://xiaohubai.github.io/vue-ts-layout/" target="_blank">vue-ts-layout</el-link>
        是一个前端模板，它基于 Vite4.x、Vue3.x setup、Vue-router4.x、Pinia、Element-plus、TypeScript 实现。
        它使用了最新的前端技术栈，内置了 vue-i18n 国际化解决方案，动态路由，提炼了典型的业务模型,
        它可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 Vue3、Vite、Ts 等主流技术。
      </span>
    </el-card>
    <el-card>
      <h4 class="title">项目信息</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item label="版本号" label-align="left">
          <el-tag>{{ version }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="github" label-align="left">
          <el-link type="primary" href="https://github.com/xiaohubai/vue-ts-layout" target="_blank">github</el-link>
        </el-descriptions-item>
        <el-descriptions-item label="文档地址" label-align="left">
          <el-link type="primary" href="https://github.com/xiaohubai/vue-ts-layout/blob/master/README.md"
            target="_blank">文档地址</el-link>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card>
      <h4 class="title">生产环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item width="400px" :label="key" v-for="(value, key) in dependencies" :key="key">
          <el-tag type="info">{{ value }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card>
      <h4 class="title">开发环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item width="400px" :label="key" v-for="(value, key) in devDependencies" :key="key">
          <el-tag type="info">{{ value }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="about">

import pkg from "../../../package.json";
const { dependencies, devDependencies, version } = pkg;

</script>

<style lang="scss" scoped>
.cls-about {
  display: flex;
  flex-direction: column;

  .title {
    margin: 0 0 15px;
    font-size: 17px;
    font-weight: bold;
    color: var(--el-text-color-primary);
  }

  .text {
    font-size: 15px;
    line-height: 25px;
    color: var(--el-text-color-regular);

  }
}

.el-card {
  margin-bottom: 14px;
}

.el-link {
  font-size: 15px;
}
</style>