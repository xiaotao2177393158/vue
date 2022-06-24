<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul style="list-style: none">
      <li v-for="item in personList" :key="item.id">
        {{ item.name }} ~ {{ item.age }}
      </li>
    </ul>

    <h3 style="color: pink;">求和为： {{ sum }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
  methods: {
    add() {
      if (this.name.trim() === "") {
        alert("请输入名字");
        return;
      }
      this.$store.commit("ADD_PERSON", {
        id: nanoid(),
        name: this.name,
        age: Math.floor(Math.random() * 100)
      });
      this.name = "";
    },
  },
};
</script>

<style>
</style>