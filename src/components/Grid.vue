<template>
<div class="grid">
    <div v-bind:key="item.id" v-for="item in tiles" class="grid__item tile" :class="'tile_type_' + item.type">
        <router-link :to="{ name: 'article', params: { id: item.id } }" class="tile__link">
            <div class="tile__img" :style="{ backgroundImage: 'url(http://lorempicsum.com/futurama/900/450/'+ item.id + ')' }"></div>
            <div class="tile__title">{{ item.title }}</div>
            <div class="tile__description">{{ item.description }}</div>    
        </router-link>
    </div>
</div>  
</template>
<script>
export default {
    computed: {
        tiles() {
           return this.$store.getters.getAllTiles
        },
    },
}
</script>
<style>
.grid {
    padding: 0 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start; 
    margin-left: -10px;
    margin-top: -10px;
}
@media all and (max-width: 480px) {
    .grid {
        display: block; 
    } 
}

.tile {
    width: calc(100%/3 - 10px);
    height: 250px;
    margin-top: 10px;
    margin-left: 10px;
    position: relative;
}

.tile_type_double {
    width: calc(100%/3*2 - 10px);
}

    
@media all and (max-width: 1024px) {
    .tile {
        width: calc(100%/2 - 10px); 
    }
    
    .tile_type_double {
        width: 100%; 
    }
}

@media all and (max-width: 480px) {
    .tile {
        width: auto; 
    } 
}

.tile__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.tile__link {
    text-decoration: none;
    color: #000;
}

.tile__description {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px;
    background: rgba(255, 255, 255, .8);
    display: flex;
    align-items: center;
    min-height: 55px;
}

.tile__title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    padding: 10px;
    background: rgba(255, 255, 255, .6);
    display: inline-block;
    font-weight: 700;
}
</style>

