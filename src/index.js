import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

const app = new Vue({

    render(h) {
        return h(App);
    },
    router,
    store
});

app.$mount(document.querySelector('#app'));
