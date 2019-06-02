<template>
  <div class="detail">
    <h2>页码：{{$route.params.id}} {{ message }}</h2>
    <router-link :to="{
        name: 'detail',
        params: {
            id: Number($route.params.id) + 1
        }
    }">下一页</router-link>
    <router-link class="link" to="/">回到首页</router-link>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace,
  } from 'vuex-class';

  @Component
  export default class Detail extends Vue {
    @State((state) => state.example.message) public message!: string;
  }
</script>

<style scoped lang="less">
  h2 {
    font-weight: normal;
  }

  .detail {
    .link {
      margin: 0 auto;
    }
  }
</style>