<template>
<div class="app">
    <header class="app__header header">
        <nav class="header__nav nav container">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/" class="nav__link">Home</router-link>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">About</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">What ever</a>
                </li>
            </ul>
        </nav>
    </header>
    <div class="app__content content container">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("fetchTiles")       
    }
};
</script>
<style>
*, *:after, *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
}

html,
body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px; 
}
.container {
    max-width: 900px;
    margin: 0 auto; 
}

.content {
    padding-bottom: 30px;
}

.header {
  width: 100%;
  background: orangered;
  padding: 20px 0;
  margin-bottom: 20px; 
}

.header__nav {
    padding: 0 20px;
}

.nav__list {
    list-style: none;
    display: flex;
    justify-content: flex-start; 
}

.nav__item {
    margin-right: 20px; 
}

.nav__item:last-child {
    margin-right: 0; 
}

.nav__link {
    color: white;
    transition: text-decoration .3s linear; 
}

.nav__link:hover, 
.nav__link:active,
.nav__link.router-link-active {
    text-decoration: none; 
}
</style>
