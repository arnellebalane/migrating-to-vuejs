<template>
    <div class="popup-container" @click="closePopup">
        <div class="popup">
            <h2>I am a popup!</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo
                quis temporibus sed nesciunt pariatur minus est suscipit, hic quaerat.
                Vitae, soluta voluptas iure non suscipit! Omnis nihil assumenda praesentium?
            </p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closePopup(e) {
            if (!e.target.closest('.popup')) {
                this.$store.commit('setIsPopupOpen', false);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.popup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup {
    width: 90vw;
    max-width: 500px;
    padding: 36px;
    background-color: #fff
}

h2 {
    margin-bottom: 18px;
}
</style>
