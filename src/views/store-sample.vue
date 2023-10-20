<script setup>
import { useSampleStore } from '@stores/sample-store'
import { storeToRefs } from 'pinia'

const store = useSampleStore()
const { count } = storeToRefs(store)
</script>

<template>
  <div w-100vw h-100vh flex flex-justify-center flex-items-center>
    <i i-carbon-campsite c-amber></i>
    <h1 c-red m-10>
      count: {{ count }}
    </h1>
    <button @click="store.increment">
      increment
    </button>
  </div>
</template>

<style lang="scss" scoped>
</style>
