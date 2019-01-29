import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import TheHeader from '../components/TheHeader.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: []
});

export default new Vue({
    router,
    store,
    render: h => h(TheHeader)
});
