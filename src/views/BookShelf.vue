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
import BookThumb from "../components/BookThumb";

export default {
  name: "BookShelf",
  data() {
    return {};
  },
  computed: {
    getBooks() {
      return this.$root.booksDB;
    }
  },
  components: {
    BookThumb: BookThumb
  }
};
</script>

<style scoped>
.bookshelf-container {
  max-width: 1300px;
  margin: 0 auto;
}
h1 {
  font-size: 3rem;
  margin: 5px 0;
  text-align: left;
}
div.books-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 auto;
}

@media screen and (max-width: 640px) {
  h1 {
    font-size: 1.6rem;
  }
}
</style>