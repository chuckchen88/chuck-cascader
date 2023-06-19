### 介绍
由于很多移动端组件库例如vant、nutui、cube等并不支持多选的级联选择器，于是一个基于vue3开发的支持多选的移动端级联选择器诞生了。

### 预览
<https://chuckchen88.github.io/chuck-cascader/>


### 安装
``` bash
$ npm i chuck-cascader@latest

```

### 使用
``` bash
# 局部使用 ChuckSearch, CheckBox, RadioBox 这三个组件也暴露出来了 按需使用
$ import { ChuckCascader } from 'chuck-cascader';
$ import "chuck-cascader/css"; # 注意需要引入css

# 全局注册
$ import ChuckCascader from 'chuck-cascader';
$ import "chuck-cascader/css"; # 注意需要引入css
$ Vue.use(ChuckCascader)

```

### ChuckCascader参数说明
|参数|类型|是否必传|说明|
|-|-|-|-|
|v-model|string\|string[]|否|多选时是数组,单选时是字符串|
|options|CascaderOption[]|是|选项|
|multiple|boolean|否|是否多选，默认false|
|color|string|否|主题颜色，默认'#1989fa'|
|title|string|否|下拉标题，默认'请选择'|
|height|string|否|下拉选项高度，默认'250px'|
|zIndex|number|否|下拉选项的zIndex，默认2023|
|filterable|boolean|否|是否支持搜索，默认true|

### CascaderOption[]
```
interface CascaderOption{
    label: string
    value: string | number
    children?: CascaderOption[]
    disabled?: boolean
}
```

### 事件
|事件名称|类型|默认值|说明|
|-|-|-|-|
|on-update:value|(value: string \| number \| Array<string \| number> \| null, option: CascaderOption \| Array<CascaderOption \| null> \| null) => void|undefined|值改变时执行的回调|
|on-confirm|() => void|undefined|点击了确认回调|


### vue3中使用示例
``` bash
<script setup lang="ts">
import { ChuckCascader, ChuckSearch, CheckBox, RadioBox } from 'chuck-cascader';
import "chuck-cascader/css";
import { ref } from 'vue'
interface CascaderOption{
    label: string
    value: string | number
    disabled?: boolean
    children?: CascaderOption[]
}
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
    :multiple="true"
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
```

