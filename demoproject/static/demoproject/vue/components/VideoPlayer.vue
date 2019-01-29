<template>
    <div class="video-player">
        <div class="video-player__overlay"></div>
        <div class="video-player__track">
            <div class="video-player__progress"></div>
        </div>
    </div>
</template>

<script>
import VideoPlayer from 'js/components/video-player';

export default {
    props: {
        playing: Boolean
    },

    watch: {
        playing(value) {
            if (value) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }
    },

    mounted() {
        this.player = new VideoPlayer(this.$el);

        if (this.playing) {
            this.player.play();
        }
    }
};
</script>

<style lang="scss" scoped src="css/_player.scss"></style>
