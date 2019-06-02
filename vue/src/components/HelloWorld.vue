<template>
  <div>
    This is Hello World Component
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {}
</script>

<style scoped lang="less">
  .hello-world {
    text-align: center;
    color: red;
  }
</style>