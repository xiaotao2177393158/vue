<template>
    <div>
        <h1>School</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
   export default {
       name: 'School',
       data() {
           return {
               message: 'Hello Vue!'
           }
       }
   }
</script>


<style>
    h1 {
        color: red;
    }
</style>