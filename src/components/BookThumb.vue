<template>  
<article class="book-thumb" v-bind:style="{background: color}">
    <div class="cover-back"></div>
    <div class="book-data-container">
        <h2 class="book-title">{{title}}</h2>
        <p class="book-author">{{author}}</p>
    </div>
</article>
  
</template>

<script>
export default {
    name: "BookThumbnail",
    props: {
        id: Number,
        title: String,
        author: String,
        color: String
    }

}
</script>

<style scoped>
article.book-thumb {
    display: flex;
    flex-wrap: nowrap;
    min-width: 10rem;
    margin:10px;
}
.cover-back{
    border-right: 3px;
    border-color: gray;
    border-style: solid;
}

.book-data-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.book-title, .book-author{
   color: white;
}


</style>