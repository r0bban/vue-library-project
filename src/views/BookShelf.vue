<template>
  <section class="bookshelf-container">
  <h1>8 Classic Children books</h1>
    <div class="books-container">
        <BookThumb
        v-for="book in getBooks"
        v-bind:key="book.id"
        v-bind:id="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:color="book.color"
        />
    </div>
  </section>
</template>

<script>
import BookThumb from "../components/BookThumb"

export default {
    data(){
        return{
        }
    },
    computed: {
        getBooks(){
            return this.$root.booksDB
        }
    },
    name: 'BookShelf',
    components: {
    BookThumb: BookThumb
  }
}
</script>

<style scoped>
div.books-container{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
}

</style>