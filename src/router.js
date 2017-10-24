import Vue from 'vue';
import Router from 'vue-router';
import Grid from './components/Grid.vue';
import Article from './components/Article.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Grid },
        { path: '/article/:id', name: 'article', component: Article }
    ]
});