<template>
  <section class="singleBook">
    <div class="single-book-container">
      <nav>
        <router-link to="/" tag="button" class="home">
          <img src="../assets/back-arrow.svg" alt />
        </router-link>
      </nav>
      <BookCover
        v-bind:book="book"
        v-bind:class="{signleView: BookCoverSingleView}"
        v-bind:routerLinkDisabled="true"
      />
      <div class="book-details">
        <h1>{{book.title}}</h1>
        <h3>By {{book.author}}</h3>
        <p class="plot">{{book.plot}}</p>
        <div class="book-data">
          <p>
            <span class="data-header">Audience:</span>
            {{book.audience}}
          </p>
          <p>
            <span class="data-header">First published:</span>
            {{book.year}}
          </p>
          <p>
            <span class="data-header">Pages:</span>
            {{book.pages}}
          </p>
          <p>
            <span class="data-header">Publisher:</span>
            {{book.publisher}}
          </p>
        </div>
        <button class="CTA">Oh, I want to read it!</button>
      </div>
    </div>
  </section>
</template>


<script>
import BookCover from "../components/BookCover";

export default {
  name: "SingleBookView",
  data() {
    return {
      BookCoverSingleView: true
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

<style>
.singleBook {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: black;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.singleBook nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
}
button.home {
  background: none;
  border: 0;
}
button.home img {
  width: 40px;
}

.singleBook h1,
.singleBook h3,
.singleBook p {
  color: white;
  text-align: left;
}
.singleBook h1 {
  margin: 0;
  font-size: 2rem;
}
.singleBook h3 {
  color: lightgray;
  font-weight: 100;
  margin: 0;
}
.singleBook p {
  color: lightgray;
}
.singleBook .plot {
  margin-top: 3rem;
}

.single-book-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  margin: 0 auto;
}

.book-cover.signleView {
  width: 50%;
  min-width: 300px;
  height: auto;
  min-height: 650px;
  margin: 0;
}

.singleBook .book-title {
  color: black;
  font-size: 2.8rem;
}
.singleBook .book-author {
  color: black;
  font-size: 1.3rem;
}

.book-details {
  width: 50%;
  min-width: 300px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.book-data {
  display: flex;
  flex-wrap: wrap;
  background: rgb(29, 29, 29);
  margin: 10px 0 10px 0;
  border: 0 solid white;
  border-radius: 5px;
  padding: 10px;
}

.book-data p {
  display: flex;
  width: 50%;
  min-width: min-content;
  white-space: nowrap;
  padding: 0 2px 0 2px;
  box-sizing: border-box;
  margin: 3px 0 3px 0;
}

.book-data .data-header {
  color: white;
  font-weight: 400;
  margin-right: 2px;
}

.singleBook .CTA {
  margin-top: auto;
  align-self: flex-start;
  padding: 15px 30px;
  border: 0 solid white;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
}

@media screen and (max-width: 1100px) and (min-width: 641px) {
  .book-cover.signleView {
    min-height: 400px;
  }

  .singleBook .book-title {
    font-size: 2.4rem;
  }
  .singleBook .book-author {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 640px) {
  .book-cover.signleView {
    min-height: 370px;
  }
  .singleBook .book-title {
    font-size: 1.6rem;
  }
  .singleBook .book-author {
    font-size: 1rem;
  }
  .book-details {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
  }

  section.singleBook {
    padding: 3px;
  }
}
</style>