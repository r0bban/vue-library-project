<template>
<body>
  <nav>
    <router-link to="/" tag="button">Hem</router-link>
  </nav>
  <div class="single-book-container">
    <BookCover v-bind:book="book" v-bind:routerLinkDisabled="true" />
    <div class="book-details">
      <h1>{{book.title}}</h1>
      <h3>{{book.author}}</h3>
      <p>{{book.plot}}</p>
      <div class="book-data">
        <p>{{book.audience}}</p>
        <p>{{book.year}}</p>
        <p>{{book.pages}}</p>
        <p>{{book.publisher}}</p>
      </div>
      <button>Oh, I want to read it!</button>
    </div>
  </div>
</body>
</template>


<script>
import BookCover from "../components/BookCover";

export default {
  name: "SingleBookView",
  data() {
    return {
      currentBook: 1
    };
  },
  components: {
    BookCover: BookCover
  },
  computed: {
    book() {
      return this.$root.getBook(this.$route.params.bookId);
    }
  }
};
</script>

<style scoped>
</style>