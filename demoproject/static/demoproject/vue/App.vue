<template>
    <div>
        <header class="header">
            <div class="header__content wrapper">
                <a href="/" class="open-page">
                    <h1 class="header__title">DemoProject</h1>
                </a>

                <nav class="nav">
                    <a href="/image" class="nav__link open-page">Image</a>
                    <a href="/gallery" class="nav__link open-page">Gallery</a>
                    <a href="/video" class="nav__link open-page">Video</a>
                    <a href="#" class="nav__link open-popup">Popup</a>
                </nav>
            </div>
        </header>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" src="css/_base.scss"></style>
