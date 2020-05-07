<template>  
<article class="book-thumb" v-bind:style="{'background-image': bgColor}">
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
    },
    computed:{
        bgColor(){
            return `linear-gradient(to bottom left, ${this.color}8C, ${this.color})`;
        }
    }

}
</script>

<style scoped>
article.book-thumb {
    display: flex;
    flex-wrap: nowrap;
    width: 300px;
    height: 400px;
    margin:10px;
}
.cover-back{
    border-width:0 3px 0 0;
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

.book-title, .book-author{
   color: white;
   margin: 0;
   text-align: left;
}


</style>