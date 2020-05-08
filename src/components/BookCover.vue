<template>
  <article
    class="book-cover"
    v-on:click="routeToBook"
    v-bind:style="{'background-image': bgColor}"
  >
    <div class="cover-back"></div>
    <div class="book-data-container">
      <h2 class="book-title">{{book.title}}</h2>
      <p class="book-author">{{book.author}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "BookCover",
  data() {
    return {
      diableRouterLink: this.routerLinkDisabled
    };
  },
  props: {
    book: Object,
    routerLinkDisabled: Boolean
  },
  methods: {
    routeToBook() {
        if(!this.diableRouterLink){this.$router.push("/book/id=" + this.book.id);}
    }
  },
  computed: {
    bgColor() {
      return `linear-gradient(to bottom left, ${this.book.color}8C, ${this.book.color})`;
    }
  }
};
</script>

<style>
article.book-cover {
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
  height: 400px;
  margin: 10px;
}

.cover-back {
  border-width: 0 3px 0 0;
  border-color: rgba(98, 98, 98, 0.459);
  border-style: solid;
  min-width: 20px;
}

.book-data-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 10px;
}

.book-title,
.book-author {
  color: white;
  margin: 0;
  text-align: left;
}
</style>