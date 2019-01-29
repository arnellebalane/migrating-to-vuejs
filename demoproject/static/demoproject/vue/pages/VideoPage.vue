<template>
    <div class="wrapper">
        <h1>Video Page</h1>

        <VideoPlayer />
    </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
    components: {
        VideoPlayer
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 60px 0;
}

h1 {
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
