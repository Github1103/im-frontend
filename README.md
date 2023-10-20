# Vue 3 + Vite + Pinia + Vue Router

## Vue Template

规范一下 Vue 文件的格式

- vscode

使用 `ctrl+shift+p` 搜索 `Snippets:Config User Snippets` 找到 `vue.json` 替换 其中 Vue3 的模板如下：

```json
{
    "Vue3": {
		"prefix": "vue",  
		"body": ["<script setup>\n\n</script>\n",
		"<template>\n\n</template>\n",
		"<style lang=\"scss\" scoped>\n\n</style>\n"
		],
		"description": "vue3"
	},
}
```

创建新的 Vue 文件后输入 `vue` 即可。

- webstorm

在 `setting` 中搜索 `File and Code Templates` 将 `Vue Composition API Component` 文件替换为如下模板：

```vue
<script setup>

</script>

<template>
  #[[$END$]]#
</template>

<style scoped lang="scss">

</style>
```

- 建议将 Scheme 修改为 Project 以免影响其他项目的格式。

## Pinia

> 参见官网：https://pinia.vuejs.org/zh/introduction.html

可以参考 `stores/sample-store.js` 和 `components/sample-store.vue`的使用方法，只做范例使用，正式开发之后请删除。这里只有最基本的使用，还需细读官方文档。

## Vue Router

> 参见官网：https://router.vuejs.org/zh/introduction.html

TBD

## UnoCSS

> 参见官网：https://unocss.dev/guide/

TBD
