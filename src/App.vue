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

//const filterValue = ref('') // 双向绑定
const checked = ref(true)
const filterable = ref(true)

</script>

<template>
  <!-- 搜索框：
  <ChuckSearch v-model="filterValue" /> -->
  <div style="display: flex; align-items: center; margin: 20px;">
    切换单多选：
    <CheckBox color="#1989fa" v-model="checked" :childChecked="false" :disabled="false" @update:value="(_e: any) => {value = []}" />&nbsp;&nbsp;&nbsp;&nbsp;
    是否支持搜索：
    <CheckBox color="#1989fa" v-model="filterable" :childChecked="false" :disabled="false" @update:value="(_e: any) => {}" />
  </div>
  <!-- RadioBox:
  <RadioBox color="#1989fa" v-model="checked" :disabled="false" :showNext="true" />  -->
  <ChuckCascader
    :options="options"
    :multiple="checked"
    color="#1989fa"
    title="请选择"
    v-model="value"
    @update:value="onUpdateValue"
    height="250px"
    :zIndex="9999"
    :filterable="filterable"
    @confirm="confirm"
  />
</template>

<style lang="less">
  body{
    margin:0;
    padding:0;
  }
</style>
