<template>
  <div>
    <div class="big">
      <div class="inner">
        <img src="../../assets/notFound.png">
        <p>The requested URL was not found on this server.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Error">

</script>

<style lang="scss" scoped>
.big {
  width: 100%;
  height: calc(100vh - 220px);
  background-color: rgb(244, 244, 244);
  position: relative;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inner p {
  text-align: center;
  font-size: 24px;
}

</style>
