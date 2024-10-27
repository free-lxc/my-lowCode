<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import ComponentList from "@/components/ComponentList.vue"
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
  .el-container {
    height: 100%;
    width: 100%;
  }
  .el-aside {
    height: 100%;
    background-color: #d3dce6;
    border-right: 1px solid gray;
  }
  .el-main {
    height: 100%;
    background-color: gray;
  }
}
</style>
