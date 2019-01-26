<template>
    <header>
        <a id="link-home" href="/"><img id="pu-logo" src="/PopUpConcerts_Logo.svg" alt="PopUp Concerts" /></a>

        <nav>
            <ul>
                <nuxt-link to="/" class="header-menu-item">Home</nuxt-link>
                <nuxt-link to="/events" class="header-menu-item">Events</nuxt-link>
                <nuxt-link to="/about" class="header-menu-item">About</nuxt-link>
                <nuxt-link to="/contact" class="header-menu-item">Contact</nuxt-link>
            </ul>
            <input type="checkbox" id="menu-toggle"/>
            <label id="trigger" class="mToggle" for="menu-toggle"></label>
            <label id="burger" class="mToggle" for="menu-toggle"></label>
            <div id="menu-background"></div>
            <ul id="menu">
                <nuxt-link to="/" class="li-mobile">Home</nuxt-link>
                <nuxt-link to="/events" class="li-mobile">Events</nuxt-link>
                <nuxt-link to="/about" class="li-mobile">About</nuxt-link>
                <nuxt-link to="/contact" class="li-mobile">Contact</nuxt-link>
            </ul>
        </nav>
    </header>
</template>
