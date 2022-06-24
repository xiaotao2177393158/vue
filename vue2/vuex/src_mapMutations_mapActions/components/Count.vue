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
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="oddJia(n)">当前求和为奇数在加</button>
    <button @click="waitJia(n)">等一等在加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: "Category",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助 mapState 实现属性的计算 从 store 中获取数据 
    ...mapState(['sum', 'school', 'subject']),

    // 获取 getters 中的数据
    ...mapGetters(['getSum']),
  },
  methods: {
    /* JIA(val) {
      this.$store.commit("JIA", val);
    },
    JIAN(val) {
      this.$store.commit("JIAN", val);
    }, */

    // 借助 mapMutations 实现方法的调用 方法会调用 commit 去联系 mutations 中的方法
    // ...mapMutations({JIA: 'JIA', JIAN:'JIAN'}),
    ...mapMutations(['JIA', 'JIAN']),

  /* ****************************************************************************** */

    /* oddJia(val) {
      this.$store.dispatch("oddJia", val);
    },
    waitJia(val) {
      this.$store.dispatch("waitJia", val);
    }, */

    // 借助 mapActions 实现方法的调用 方法会调用 dispatch 去联系 actions 中的方法
    ...mapActions(['oddJia', 'waitJia']),
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