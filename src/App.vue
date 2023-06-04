<script setup lang="ts">

import { CascaderOption } from './components/types';
import { ref } from 'vue'

const value = ref([]) // 双向绑定
const options = ref<CascaderOption[]>([]) // 选项

function getOptions (depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, '' + String(i))
      })
    } else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

options.value = getOptions()

const onUpdateValue = (value: string[], options: CascaderOption[]) => {
  console.log(value) // 选中的
  console.log(options) // 选中的
}

const confirm = () => {
  console.log('点击了确认')
}

const filterValue = ref('') // 双向绑定
const checked = ref(true)

</script>

<template>
  搜索框：
  <ChuckSearch v-model="filterValue" />
  CheckBox:
  <CheckBox color="#1989fa" v-model="checked" :childChecked="false" :disabled="false" @update:value="(_e: any) => {}" />
  RadioBox:
  <RadioBox color="#1989fa" v-model="checked" :disabled="false" :showNext="true" /> 
  级联：
  <ChuckCascader
    :options="options"
    :multiple="false"
    color="#1989fa"
    title="请选择"
    v-model="value"
    @update:value="onUpdateValue"
    height="250px"
    :zIndex="9999"
    :filterable="true"
    @confirm="confirm"
  />
</template>

<style lang="less">
  body{
    margin:0;
    padding:0;
  }
</style>
