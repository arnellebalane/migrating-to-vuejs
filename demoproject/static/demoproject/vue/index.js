import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

new Vue({
    el: '#page-root',
    router,
    store,
    render: h => h(App)
});
