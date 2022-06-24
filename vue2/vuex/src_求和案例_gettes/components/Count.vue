<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>当前求和放大10倍为：{{ $store.getters.getSum }}</h1>
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
export default {
  name: "Category",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    jia () {
      this.$store.commit('JIA', this.n)
    },
    jian () {
      this.$store.commit('JIAN', this.n)
    },
    oddJia () {
      this.$store.dispatch('oddJia', this.n)
    },
    waitJia () {
      this.$store.dispatch('waitJia', this.n)
    }
  },

};
</script>

<style>
button {
  margin-left: 10px;
}
</style>