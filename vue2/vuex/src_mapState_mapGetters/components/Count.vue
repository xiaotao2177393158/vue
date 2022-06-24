<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ getSum }}</h1>
    <h1>我在 {{ school }} ， 学习 {{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="oddJia">当前求和为奇数在加</button>
    <button @click="waitJia">等一等在加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: "Category",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 原始方法
    /* sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    subject() {
      return this.$store.state.subject
    }, */
    // 封装方法
    // 借助 mapState 实现属性的计算 从 store 中获取数据 （对象写法）
    // ...mapState({sum:'sum', school:'school', subject:'subject'}),
    // 借助 mapState 实现属性的计算 从 store 中获取数据 （数组写法）
    ...mapState(['sum', 'school', 'subject']),


    // 获取 getters 中的数据
    ...mapGetters(['getSum']),
  },
  methods: {
    jia() {
      this.$store.commit("JIA", this.n);
    },
    jian() {
      this.$store.commit("JIAN", this.n);
    },
    oddJia() {
      this.$store.dispatch("oddJia", this.n);
    },
    waitJia() {
      this.$store.dispatch("waitJia", this.n);
    },
  },
  mounted() {
    const x = mapState({sum: 'sum', school: 'school', subject: 'subject'});
    console.log(x);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>