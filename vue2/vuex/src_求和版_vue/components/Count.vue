<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
      sum: 0
    };
  },
  methods: {
    jia () {
      this.sum += this.n;
    },
    jian () {
      this.sum -= this.n;
    },
    oddJia () {
      if (this.sum % 2 !== 0) {
        this.sum += this.n;
      }
    },
    waitJia () {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);  
    }
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>