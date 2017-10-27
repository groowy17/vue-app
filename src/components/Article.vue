<template>
    <article v-if="article" class="arcticle">
        <figure class="article__figure">
            <img class="article__img" :src="'http://lorempicsum.com/futurama/900/200/' + article.id" :alt="article.title">
        </figure>
        <h1 class="article__header article__header_main">{{ article.title }}</h1>
        <p class="article__text">
            {{ article.text }}
        </p>
    </article>
    <div v-else>
        <h1>Article not found</h1>
    </div>
</template>
<script>
export default {
    computed: {
        article() {
            return this.$store.getters.getTilesById(parseInt(this.$route.params.id))[0]
        },
    }
}
</script>
<style>
.article__img {
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

