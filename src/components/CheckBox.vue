<script lang="ts">
export default {
  name: 'CheckBox'
}
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ 
  color: string, 
  modelValue: boolean | undefined, 
  childChecked: boolean | undefined,
  disabled: boolean | undefined
}>(),{
  disabled: false,
})

const emits = defineEmits(['update:modelValue','update:value'])

const bgColor = computed(()=>{
  return (props.modelValue || props.childChecked) ? props.color : 'white'
})

const outLineColor = computed(() => {
  return (props.modelValue || props.childChecked) ? props.color : '#aaa'
})

const toggleCheck = () => {
  if(props.disabled) return false
  emits("update:modelValue", !props.modelValue)
  emits("update:value", !props.modelValue)
}

</script>

<template>
  <div class="checkbox" :class="{ disabled: disabled }" :style="`background-color:${bgColor};outline:${outLineColor} solid 1px`" @click="toggleCheck">
    <i v-if="modelValue && !disabled" class="iconfont icon-success"></i>
    <i v-if="childChecked && !disabled" class="iconfont icon-minus"></i>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/ifont/iconfont.css');
.checkbox{
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  outline: #aaa solid 1px;
  i{
    color: white;
  }
}
.checkbox.disabled{
  background:#eee !important;
  outline: #aaa solid 1px !important;
}
</style>
