<template>
  <section class="bookshelf-container">
    <h1>8 Classic Children books</h1>
    <div class="books-container">
      <BookCover
        v-for="book in getBooks"
        v-bind:key="book.id"
        v-bind:book="book"
      />



    </div>
  </section>
</template>

<script>
import BookCover from "../components/BookCover";

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
    BookCover: BookCover
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
  padding-left: 10px;
}
div.books-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 auto;
}

@media screen and (max-width: 680px) {
  div.books-container {
  display: flex;
  justify-content: center;
}
  h1 {
    font-size: 2rem;
    text-align: center;
  }
}

@media screen and (max-width: 475px) {
  h1 {
    font-size: 1.6rem;
  }
}
</style>