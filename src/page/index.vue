<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main>
        <div
          class="content"
          @drop="handleDrop"
          @dragover="handleDragOver"
          @dragend="handleDragend"
          @dragleave="handleDragLeave"
        >
          <Editor />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import _ from "lodash"
import ComponentList from "../components/ComponentList.vue"
import Editor from "../components/Editor/index.vue"
import componentList from "../componentList/componentList"
import { useAppStore } from "../utils/index"
const appStore = useAppStore()
const { setIndex } = appStore
const { index, currentComponent, componentAllList } = storeToRefs(appStore)
const handleDrop = (e: any) => {
  e.preventDefault() // 防止默认的 drop 处理
  e.stopPropagation() // 防止事件传播
  const index = e.dataTransfer.getData("currentIndex")
  if (index) {
    const component = _.cloneDeep(componentList[index])
    component.style.top = e.clientY
    component.style.left = e.clientX
    component.id = Date.now()
    componentAllList.value.push(component)
  }
  window.console.log(index, "index", e.target.className, "class")
}
const handleDragOver = (e: any) => {
  window.console.log(222)
  e.preventDefault()
  return false
}
const handleDragend = (e: any) => {
  window.console.log("拖拽结束了")
  e.preventDefault()
}
const handleDragLeave = (e: any) => {
  e.stopPropagation()
  window.console.log("离开")
}
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
    padding: 0;
    .content {
      z-index: 99;
      height: 100%;
      width: 100%;
      background: gray;
    }
  }
}
</style>
