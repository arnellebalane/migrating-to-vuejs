import Vue from 'vue';
import store from '../store';
import TheHeader from '../components/TheHeader.vue';

Vue.component('router-link', {
    render(h) {
        return h('a', {}, this.$slots.default);
    }
});

export default new Vue({
    store,
    render: h => h(TheHeader)
});
