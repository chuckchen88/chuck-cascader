<script lang="ts">
export default {
  name: 'RadioBox'
}
</script>
<script setup lang="ts">

const props = withDefaults(defineProps<{ 
  color: string, 
  modelValue: boolean | undefined, 
  disabled: boolean | undefined,
  showNext: boolean | undefined,
}>(),{
  disabled: false,
  showNext: false
})

const emits = defineEmits(['update:modelValue','update:value'])


const toggleCheck = () => {
  if(props.disabled) return false
  if(props.showNext) return false
  emits("update:modelValue", !props.modelValue)
  emits("update:value", !props.modelValue)
}

</script>

<template>
  <div class="radiobox" :class="{ disabled: disabled }" @click="toggleCheck">
    <i v-if="modelValue" class="iconfont icon-success" :style="`color: ${color}`"></i>
    <i v-if="!modelValue && showNext" class="iconfont icon-next"></i>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/ifont/iconfont.css');
.radiobox{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  .icon-next {
    color: #333;
  }
}
</style>
