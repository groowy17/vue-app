<template>
<div class="app-layout">
    <header class="header">
        <div class="container">
            <nav class="header__nav">
                <ul class="menu">
                    <li class="menu__item">
                        <router-link to="/" class="menu__link">Home</router-link>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">About</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">What ever</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <section class="main">
            <router-view></router-view>
        </section>
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

.main {
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

.menu {
    list-style: none;
    display: flex;
    justify-content: flex-start; 
}

.menu__item {
    margin-right: 20px; 
}

.menu__item:last-child {
    margin-right: 0; 
}

.menu__link {
    color: white;
    transition: text-decoration .3s linear; 
}

.menu__link:hover, .menu__link:active {
    text-decoration: none; 
}

.menu__link.router-link-active {
    text-decoration: none;
}
</style>
