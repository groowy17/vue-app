import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const urlApi = '/api/tiles';

export default new Vuex.Store({
    state: {
        tiles: []
    },
    getters: {
        getAllTiles(state) {
            return state.tiles;
        },
        getTilesById(state) {
            return id => state.tiles.filter(item => {
                return item.id === id
            })
        }
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    actions: {
        fetchTiles({commit}) {
            Vue.http.get(urlApi)
            .then((response) => {
                let tiles = response.body.tiles;
                commit('set', { type: 'tiles', items: tiles });
            })
            .catch((error) => {
                console.log(error.statusText);
            });
        },
    }
});