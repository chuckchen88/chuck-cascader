<script lang="ts">
export default {
  name: 'ChuckCascaderItem'
}
</script>
<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { CascaderOption } from './types'
  import CheckBox from './CheckBox.vue';
  import RadioBox from './RadioBox.vue';

  const activeId = ref(0)
  const activeId2 = ref(-1)

  const props = defineProps<{ 
    multiple: boolean
    activeId: number
    depth: number
    options: CascaderOption[]
    color: string
    height: string
  }>()
  const emits = defineEmits(["checkChange"])

  const change = (index: number, item: CascaderOption, type: number = 1) => {
    if(item.disabled) return false
    activeId.value = index
    // 没有children代表是最后一级
    if(type === 1){
      if (!item.children) {
        item.checked = props.multiple?!item.checked:true
        emits("checkChange", item)
      }
    } else {
      emits("checkChange", item)
    }
  }

  const checkChange = (item: CascaderOption) => {
    emits("checkChange", item)
  }

  watch(
    () => props.options,
    (newVal) => {
      // 选中第一个
      if(!newVal[activeId.value]){
        activeId.value = 0
      }
    },
    {
      immediate: true,
      deep: true
    }
  )
</script>
<template>
  <div class="cascaderList" :style="`width:${100 / depth}%;height:${height}`">
    <div 
      class="cascaderItem"
      v-for="item,index in options"
      :key="index"
      :class="{ active: index === activeId, disabled: item.disabled }"
      @click.self="change(index, item)"
    >
      {{ item.label }}
      <CheckBox v-if="multiple" :color="color" v-model="item.checked" :childChecked="item.childChecked" :disabled="item.disabled" @update:value="(_e: any) => change(index, item, 2)" />
      <RadioBox v-else :color="color" v-model="item.checked" :disabled="item.disabled" :showNext="item.children && item.children.length > 0"></RadioBox>
    </div>
  </div>
  <ChuckCascaderItem 
    v-if="activeId > -1 && options[activeId] && options[activeId].children"
    :options="options[activeId].children??[]"
    :multiple="multiple"
    :active-id="activeId2"
    :depth="depth"
    @check-change="checkChange"
    :color="color"
    :height="height"
  />
</template>

<style scoped lang="less">
.cascaderList{
  width:100%;
  display: inline-block;
  height: 300px;
  overflow-y: auto;
  color:#333;
  .cascaderItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 6px;
    border-bottom: 1px solid #f2f2f2;
  }
  .cascaderItem.active {
    background: #eee;
  }
  .cascaderItem.disabled{
    color: #999;
    cursor: not-allowed;
  }
}
</style>
