<template>
    <header class="header">
        <div class="wrapper">
            <a href="/">
                <h1>DemoProject</h1>
            </a>

            <nav>
                <a href="/image">Image</a>
                <a href="/gallery">Gallery</a>
                <a href="/video">Video</a>
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
