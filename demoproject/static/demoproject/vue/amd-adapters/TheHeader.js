import Vue from 'vue';
import store from '../store';
import TheHeader from '../components/TheHeader.vue';

export default new Vue({
    store,
    render: h => h(TheHeader)
});
