<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ getSum }}</h1>
    <h1>我在 {{ school }} ， 学习 {{ subject }}</h1>

    <h3 style="color: pink;">person 总数为： {{ personList.length }}</h3>
    
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
    ...mapState('count',['sum', 'school', 'subject']),
    ...mapState('person',['personList']),

    // 获取 getters 中的数据
    ...mapGetters('count',['getSum']),
  },
  methods: {
    // 借助 mapMutations 实现方法的调用 方法会调用 commit 去联系 mutations 中的方法
    ...mapMutations('count',['JIA', 'JIAN']),

  /* ****************************************************************************** */

    // 借助 mapActions 实现方法的调用 方法会调用 dispatch 去联系 actions 中的方法
    ...mapActions('count',['oddJia', 'waitJia']),
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>