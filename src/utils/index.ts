import { defineStore } from "pinia"

export const useAppStore = defineStore("appStore", {
  state: () => ({
    index: -1,
    currentComponent: {}, // 目前正在操作的组件
    componentAllList: [] as any[],
  }),
  actions: {
    setIndex(index: number) {
      this.index = index
    },
  },
})
