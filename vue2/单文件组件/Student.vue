<template>
    <div>
        <h1>Student</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
   export default {
       name: 'Student',
       data() {
           return {
               message: 'Hello Vue!'
           }
       }
   }
</script>


<style>
    h1 {
        color: pink;
    }
</style>