<template>
    <article v-if="article" class="arcticle">
        <figure class="article__figure">
            <img class="article__img" :src="'http://lorempicsum.com/futurama/900/200/' + article.id" :alt="article.title">
        </figure>
        <h1 class="article__header">{{ article.title }}</h1>
        <p class="article__text">
            {{ article.text }}
        </p>
    </article>
    <div v-else class="not-found">
        <h1 class="not-found__header">Article not found</h1>
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
.arcticle {
    padding: 0 20px;
}

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
}

.not-found {
    padding: 0 20px;
}

.not-found__header {
    text-align: center;
}
</style>

