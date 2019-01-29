<template>
    <div class="gallery">
        <img src="https://picsum.photos/800/400/?image=14">
        <img src="https://picsum.photos/400/400/?image=13">
        <img src="https://picsum.photos/400/400/?image=12">
        <img src="https://picsum.photos/400/400/?image=11">
        <img src="https://picsum.photos/400/400/?image=10">
    </div>
</template>

<style lang="scss" scoped>
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

img:not(:first-child) {
    width: calc((100% - 24px) / 2);
    height: 400px;
    object-fit: cover;
    object-position: center center;
    margin-top: 24px;
}
</style>
