<template>
  <div class="index">
    <h2>{{ message }}</h2>
    <button @click="getNewMessage()">Get New Message</button>
    <hello-world></hello-world>
    <div class="wrapper">
      <router-link to="/detail/1" class="author">Wang Yisheng</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
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
  import {
    sayHello
  } from '../utils/example';
  import HelloWorld from '../components/HelloWorld.vue';

  const example = namespace('example');

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Index extends Vue {
    @State((state) => state.example.message) public message!: string;
    @example.Action('getNewMessage') getNewMessage!: Function;

    public created() {
      const arr = [...[1, 2, 3], ...[4]];
      console.log(arr);
      sayHello();
      this.$store.dispatch('example/initMessage');
    }
  }
</script>

<style scoped lang="less">
  h2 {
    font-weight: normal;
  }

  .wrapper {
    .author {
      text-align: center
    }
  }
</style>