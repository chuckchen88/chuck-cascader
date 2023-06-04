<script lang="ts">
export default {
  name: 'Test'
}
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ color: string, modelValue: boolean, childCheked:boolean }>()

const emits = defineEmits(['update:modelValue'])

const bgColor = computed(()=>{
  return (props.modelValue || props.childCheked) ? props.color : 'white'
})

const outLineColor = computed(()=>{
  return (props.modelValue || props.childCheked) ? props.color : '#aaa'
})

const toggleCheck = () => {console.log('hihi')
  emits("update:modelValue", !props.modelValue)
}

</script>

<template>
  <div class="checkbox" :style="`background-color:${bgColor};outline:${outLineColor} solid 1px`" @click="toggleCheck">
    <i v-if="modelValue" class="iconfont icon-success"></i>
    <i v-if="childCheked" class="iconfont icon-minus"></i>
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
  outline: #aaa solid 1px;
  i{
    color: white;
  }
}
</style>
