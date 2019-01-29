<template>
    <div>
        <TheHeader />
        <router-view></router-view>
        <ThePopup />
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ThePopup from './components/ThePopup.vue';

export default {
    components: {
        TheHeader,
        ThePopup
    }
};
</script>

<style lang="scss" src="css/_base.scss"></style>
