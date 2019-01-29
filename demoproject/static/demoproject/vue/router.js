import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    routes: [{
        path: '/gallery',
        component: () => import('./pages/GalleryPage.vue')
    }]
});

router.afterEach(to => {
    if (to.matched.length === 0) {
        window.location.reload();
    }
});

export default router;
