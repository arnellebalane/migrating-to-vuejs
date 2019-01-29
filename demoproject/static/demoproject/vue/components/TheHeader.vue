<template>
    <header class="header">
        <div class="wrapper">
            <router-link to="/">
                <h1>DemoProject</h1>
            </router-link>

            <nav>
                <router-link to="/image">Image</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/video">Video</router-link>
                <a href="#">Popup</a>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
}

h1 {
    font-size: 24px;
}

nav a:not(:first-child) {
    margin-left: 18px;
}
</style>
