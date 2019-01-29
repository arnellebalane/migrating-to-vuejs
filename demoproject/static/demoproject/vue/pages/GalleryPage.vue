<template>
    <div class="wrapper">
        <h1>Gallery Page</h1>

        <ImageGallery />
    </div>
</template>

<script>
import ImageGallery from '../components/ImageGallery.vue';

export default {
    components: {
        ImageGallery
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 60px 0;
}

h1 {
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
