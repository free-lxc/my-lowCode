<template>
  <div class="component-list">
    <div
      class="list"
      draggable="true"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
      v-for="(item, index) in componentList"
      :key="index"
      :data-index="index"
    >
      <span v-if="item.icon.substr(0, 2) === 'el'" :class="item.icon"></span>
      <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import componentList from "../componentList/componentList"
const handleDragstart = (e: any) => {
  window.console.log("拖拽开始了", e.target.dataset.index, "index")
  e.dataTransfer.setData("currentIndex", e.target.dataset.index)
}
const handleDragend = (e: any) => {
  e.preventDefault()
}
onMounted(() => {
  console.log("组件已挂载，检查元素是否渲染完成")
  console.log(componentList)
})
</script>

<style lang="scss" scoped>
.component-list {
  opacity: 1;
  height: 65%;
  padding: 8px;
  display: grid;
  position: relative;
  grid-gap: 10px 19px;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: repeat(auto-fill, 40px);
  transition: opacity 0.5s 0.5s;

  .list {
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    cursor: grab;
    text-align: center;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid black;
    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-biaoge {
      font-size: 18px;
    }

    .icon-tupian {
      font-size: 16px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
    }
  }
}
</style>
