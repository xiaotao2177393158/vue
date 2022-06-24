<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addZhang">添加一个性张的人</button>
    <button @click="addServer">通过服务器获取名字添加一个人</button>
    <ul style="list-style: none">
      <li v-for="item in personList" :key="item.id">
        {{ item.name }} ~ {{ item.age }}
      </li>
    </ul>

    <h3 style="color: pink;">求和为： {{ sum }}</h3>

    <h3>列表中第一个人的名字是： {{ firstPersonName }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState('person',["personList"]),
    ...mapState('count',["sum"]),

    ...mapGetters('person',['firstPersonName']),
  },
  methods: {
    add() {
      if (this.name.trim() === "") {
        alert("请输入名字");
        return;
      }
      
      this.$store.commit("person/ADD_PERSON", {
        id: nanoid(),
        name: this.name,
        age: Math.floor(Math.random() * 100)
      });
      this.name = "";
    },
    addZhang() {
      this.$store.dispatch('person/addPersonZhang', {
        id: nanoid(),
        name: this.name,
        age: Math.floor(Math.random() * 100)
      });
      this.name = "";
    },
    addServer() {
      this.$store.dispatch('person/addPersonServer');
    },
  },
};
</script>

<style>
</style>