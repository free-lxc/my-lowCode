import CircleShape from "@/componentList/CircleShape/index.vue"

// const components = ["RectShape", "LineShape"]
// 'CircleShape',
//     'Picture',
//     'VText',
//     'VButton',
//     'Group',
//     'RectShape',
//     'LineShape',
//     'VTable',
//     'VChart',
const componentList: any[] = []
// components.forEach((key) => {
//     componentList.push({key, component: `${key}` })
//     componentList.push({key:`${key}Attr`,  component: () => import(`../custom-component/${key}/Attr`) })
// })
componentList.push({ key: "CircleShape", component: CircleShape })
export default componentList
