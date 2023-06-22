<script lang="ts">
export default {
  name: 'ChuckSearch'
}
</script>
<script setup lang="ts">

const props = withDefaults(defineProps<{ 
  modelValue: string | undefined, 
  placeholder?: string | undefined,
}>(),{
  placeholder: '请输入搜索关键词'
})

const emits = defineEmits(['update:modelValue'])

const onInput = (e: any) => {
  emits('update:modelValue', e.target.value)
}

</script>

<template>
  <div class="chuckSearch">
    <div class="inner">
      <i class="iconfont icon-search"></i>
      <input
        type="text"
        @input="onInput"
        :value="props.modelValue"
        :placeholder="placeholder"
      />
    </div>
    
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/ifont/iconfont.css');
.chuckSearch {
  background:white;
  padding:10px;
  .inner{
    display: flex;
    height:30px;
    line-height: 30px;
    background:rgb(233, 233, 233);
    border-radius: 4px;
    .icon-search{
      color:rgb(176, 176, 176);
      font-size: 20px;
      padding-left: 10px;
    }
  }
  input{
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    user-select: auto;
    outline: none;
    font-size:14px;
    border-radius: 4px;
  }
  input::input-placeholder{
    color:rgb(176, 176, 176);
  }
  input::-webkit-input-placeholder{	
    color: rgb(176, 176, 176);
  }
}
</style>
