<template>
  <div class="editor">
    <component
      v-for="item in componentAllList"
      :is="item.component"
      :style="item.style"
      :key="item.id"
      @click.stop="handleClick(this, item)"
    ></component>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useAppStore } from "../../utils/index"
const appStore = useAppStore()
const { index, currentComponent, componentAllList } = storeToRefs(appStore)
const handleClick = (e: any, item: any) => {
  window.console.log(1111)
  currentComponent.value = item
  return false
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100%;
  width: 100%;
}
</style>
