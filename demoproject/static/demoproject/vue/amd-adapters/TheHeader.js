import Vue from 'vue';
import store from '../store';
import TheHeader from '../components/TheHeader.vue';

Vue.component('router-link', {
    props: {
        to: [String, Object]
    },

    render(h) {
        const href = typeof this.to === 'string' ? this.to : this.to.path;
        const data = {
            attrs: {
                href
            }
        };
        return h('a', data, this.$slots.default);
    }
});

export default new Vue({
    store,
    render: h => h(TheHeader)
});
