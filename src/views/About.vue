<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="logBook">logga böcker</button>
  </div>
</template>


<script>



export default {
  name: 'About',
  methods: {
    logBook(){
    console.log(this.$root.booksDB)
    }
  }
}
</script>