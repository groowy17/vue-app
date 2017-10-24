<template>
    <article class="arcticle">
        <figure class="article__figure">
            <img class="article_img" :src="'http://lorempicsum.com/futurama/900/200/' + article.id" :alt="article.title">
        </figure>
        <h1 class="article__header article__header_main">{{ article.title }}</h1>
        <p class="article__text">
            {{ article.text }}
        </p>
    </article>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("fetchTiles")
    },
    computed: {
        article() {
            return this.$store.getters.getTilesById(this.$route.params.id)[0]
        }
    }
}
</script>
<style>
.article_img {
    max-width: 100%;
    max-height: 100%;
}

.article__header {
    padding: 30px 0;
    text-align: center;
    font-size: 2rem;
}

.article__text {
    line-height: 1.5rem;
    padding: 0 20px;
}
</style>

