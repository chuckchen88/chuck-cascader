<script lang="ts">
export default {
  name: 'ChuckCascader'
}
</script>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { CascaderOption } from './types'
import ChuckCascaderItem from './ChuckCascaderItem.vue';
import ChuckSearch from './ChuckSearch.vue';

const filterValue = ref('')
const showCascader = ref(false)
const chuckCascaderRef = ref<HTMLElement|null>(null)
const cascaderTop = ref(0)

const props = withDefaults(defineProps<{ 
  multiple?: boolean
  options: CascaderOption[]
  color?: string
  title?: string
  modelValue?: string[] | string  // 多选时是数组 单选时是字符串
  height?: string
  zIndex?: number
  filterable?: boolean
}>(),{
  multiple: false,
  color: '#1989fa',
  title: '请选择',
  height: '250px',
  zIndex: 2023,
  filterable: true
})

const emits = defineEmits(["update:modelValue", "update:value", "confirm"])

const controlledValueRef = computed(() => {
  if(props.multiple){
    return props.modelValue || []
  }
  return props.modelValue || ''
})

const textColor = computed(() => {
  return showCascader.value || controlledValueRef.value.length ? props.color: '#333'
})

const options = computed(() => {
  const { value } = controlledValueRef;
  let fOptions = formatOptions(props.options, false, false)
  let mapValue = value as string[]
  if(!props.multiple){
    mapValue = [value] as string[]
  }
  mapValue.map(v => {
    checkChildsByValue(fOptions, v)
  })
  mapValue.map(v => {
    getParentsByValue(fOptions, v)
  })
  return fOptions
})

const depth = computed(() => {
  return getDepth(props.options)
})

const filterOptions = computed(() => {
  return mpTree(filterValue.value, options.value)
})

/**
 * 计算级联深度
 * @param options 
 */
const getDepth = (options: CascaderOption[]) => {
  let stack = [options]
  let depth = 0
  while(stack.length > 0){
    let temp = [] as any
    const list = stack.pop()
    if(list?.length === 0){
      continue
    }
    depth++
    list?.forEach(item=>{
      if(item && Array.isArray(item.children)){
        temp = temp.concat(...item.children)
      }
    })
    if(temp.length > 0){
      stack.push(temp)
    }
  }
  return depth
}

/**
 * 找出所有选中的
 */
const findAllChecked = () => {
  let result = [] as any
  const findChecked = (options: CascaderOption[] ) => {
    options.map(item => {
      if(item.checked){
        result.push(item)
      } else {
        item.children && findChecked(item.children)
      }
    })
  }
  findChecked(options.value)
  return result
}

/**
 * 找到所有父级 选中或半选
 * @param options 
 * @param value 
 */
const getParentsByValue = (options: CascaderOption[], value: string | number | undefined): any => {
  for(let i in options){
    if(options[i].value === value){
      return [options[i]]
    }
    if(options[i].children) { 
      let node = getParentsByValue(options[i].children??[], value)
      if(node !== undefined) {
        options[i].checked = options[i].children?.filter(j => j.checked).length === options[i].children?.length
        options[i].childChecked = options[i].children?.filter(j => j.childChecked).length || options[i].children?.filter(j => j.checked).length && !options[i].checked ? true : false
        return node.concat(options[i])
      }
    }
  }
}

/**
 * 选中当前及其所有子项
 * @param options 
 * @param value 
 */
const checkChildsByValue = (options: CascaderOption[], value: string | undefined): any => {
  for(let i in options){
    if(options[i].value === value) {
      options[i].checked = true
      if(options[i].children) {
        options[i].children = formatOptions(options[i].children??[], true, false)
      }
      return options[i]
    }
    if(options[i].children){
      let node = checkChildsByValue(options[i].children??[], value)
      if(node !== undefined){
        return node
      }
    }
  }
}

/**
 * 过滤树形选项 -- 用于搜索
 * @param value 
 * @param arr 
 */
const mpTree = (value: string, options: CascaderOption[]) => {
  let newOptions = [] as any
  options.forEach(item => {
    if(item.label.indexOf(value) > -1) {
      newOptions.push(item)
    } else {
      if(item.children && item.children.length > 0){
        let reData = mpTree(value, item.children)
        if(reData && reData.length > 0){
          let obj = {
            ...item,
            children: reData
          }
          newOptions.push(obj)
        }
      }
    }
  });
  return newOptions
}
/**
 * 处理选项结构
 * @param options 
 * @param checked 
 * @param childChecked 
 */
const formatOptions = (options: CascaderOption[], checked: Boolean | undefined, childChecked: Boolean): any => {
  return options.map(item => {
    return {
      ...item,
      checked,
      childChecked,
      children: item.children?formatOptions(item.children, checked, childChecked):null
    }
  })
}

/**
 * 还原处理选项结构
 * @param options 
 * @param checked 
 * @param childChecked 
 */
 const formatOptionsBack = (options: CascaderOption[]): any => {
  return options.map(item => {
    delete item.checked
    delete item.childChecked
    return {
      ...item,
      children: item.children?formatOptionsBack(item.children):null
    }
  })
}

/**
 * 选中触发
 * @param item 
 */
const checkChange = (item: CascaderOption) => {
  if(props.multiple){
    item.children = item.children?formatOptions(item.children, item.checked, false): null
    getParentsByValue(options.value, item.value)
    const allChecked = findAllChecked()
    const values = allChecked.map((item: { value: any; }) => item.value)
    emits('update:modelValue', values)
    emits('update:value', values, formatOptionsBack(allChecked))
  } else {
    emits('update:modelValue', item.value)
    emits('update:value', item.value, item)
  }
}

/**
 * 展开收起
 */
const toggleCascader = () => {
  showCascader.value = !showCascader.value
}

const reset = () => {
  emits('update:modelValue', null)
}

const confirm = () => {
  toggleCascader()
  emits("confirm")
}

onMounted(() => {
  cascaderTop.value = chuckCascaderRef.value?.getBoundingClientRect().top as any + chuckCascaderRef.value?.getBoundingClientRect().height + 2  // 有两像素的边框
});

const expand = (bool: boolean) => {
  showCascader.value = bool
}
defineExpose({
  expand
})
</script>

<template>
  <div style="position:relative;" ref="chuckCascaderRef">
    <div class="chuckCascaderList">
      <div 
        class="pullDownBtn" 
        @click.prevent="toggleCascader" 
        :style="`color:${textColor}`"
      >
        {{ modelValue?.length?`${ multiple?modelValue.length+'项':modelValue}`:title }}
        <i v-if="!showCascader" class="iconfont icon-down"></i>
        <i v-else class="iconfont icon-upward"></i>
      </div>
      <div class="mask" :style="`top:${cascaderTop}px`" v-show="showCascader" @click.prevent="toggleCascader" ></div>
      <div class="chuckCascader" :style="`z-index:${zIndex};top:${cascaderTop}px`" v-show="showCascader">
         <ChuckSearch v-if="filterable" v-model="filterValue" />
         <div class="item" :style="`height:${height}`">
          <ChuckCascaderItem 
            :options="filterOptions"
            :multiple="multiple"
            :active-id="-1"
            :depth="depth"
            @check-change="checkChange"
            :color="color"
            :height="height"
          />
         </div>
         <div class="btns">
          <div class="btnItem reset" @click="reset">重置</div>
          <div class="btnItem confirm" :style="`background:${color}`" @click="confirm">确定</div>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/ifont/iconfont.css');
.mask{
  position: fixed;
  width: 100%;
  bottom: 0;
  top: 40px;
  left: 0;
  z-index: 2002;
  background: rgba(0,0,0,.7);
}
.chuckCascaderList{
  height: 40px;
  width: 100%;
  background:white;
  .pullDownBtn {
    line-height: 40px;
    text-align: center;
    position: relative;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .chuckCascader{
    position: fixed;
    left: 0;
    top: 40px;
    width: 100vw;
    background:white;
    z-index: 2023;
    box-shadow: 0 10px 10px 0 rgba(0,0,0,.1);
    transition: height .3s;
    .item {
      display: flex;
      height: 300px;
      overflow-y: auto;
    }
    .btns{
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
      background:white;
      .btnItem{
        width: 40%;
        text-align: center;
        height:40px;
        line-height:40px;
        border-radius: 4px;
      }
      .btnItem.reset{
        background:white;
        border: 1px solid #eee;
      }
      .btnItem.reset:active{
        background:#f2f2f2;
      }
      .btnItem.confirm{
        color:white;
      }
    }
  }
}
</style>