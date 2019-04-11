<template>
  <header>
    <a id="link-home" href="/">
      <img id="pu-logo" src="/PopUpConcerts_Logo.svg" width="140" height="140" alt="PopUp Concerts">
    </a>

    <nav>
      <ul>
        <nuxt-link to="/" exact class="header-menu-item">Home</nuxt-link>
        <nuxt-link to="/events" class="header-menu-item">Events</nuxt-link>
        <nuxt-link to="/about" class="header-menu-item">About</nuxt-link>
        <nuxt-link to="/donate" class="header-menu-item">Donate</nuxt-link>
        <nuxt-link to="/contact" class="header-menu-item">Contact</nuxt-link>
      </ul>
      <input type="checkbox" id="menu-toggle" v-model="menuCheck">
      <label id="trigger" class="mToggle" for="menu-toggle"></label>
      <label id="burger" class="mToggle" for="menu-toggle"></label>
      <div id="menu-background"></div>
      <ul id="menu">
        <nuxt-link to="/" exact class="li-mobile" @click.native="menuCheck = false">Home</nuxt-link>
        <nuxt-link to="/events" class="li-mobile" @click.native="menuCheck = false">Events</nuxt-link>
        <nuxt-link to="/about" class="li-mobile" @click.native="menuCheck = false">About</nuxt-link>
        <nuxt-link to="/donate" class="li-mobile" @click.native="menuCheck = false">Donate</nuxt-link>
        <nuxt-link to="/contact" class="li-mobile" @click.native="menuCheck = false">Contact</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuCheck: false
    }
  }
}
</script>
