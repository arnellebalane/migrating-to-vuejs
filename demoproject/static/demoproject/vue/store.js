import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isPopupOpen: false
    },

    mutations: {
        setIsPopupOpen(state, value) {
            state.isPopupOpen = value;
        }
    }
});
