<template>
  <footer>
    <div id="footer-menu">
      <ul>
        <li>
          <nuxt-link to="/" class="li-mobile">
            <h5>Home</h5>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events" class="li-mobile">
            <h5>Events</h5>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="li-mobile">
            <h5>About</h5>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/donate" class="li-mobile">
            <h5>Donate</h5>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="li-mobile">
            <h5>Contact</h5>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id="footer-social">
      <ul class="ul-icons ul-icons-inverse">
        <li>
          <a
            href="//www.facebook.com/popupconcerts"
            target="_blank"
            class="facebook"
            title="Facebook"
          >
            <i class="fa fa-facebook" aria-hidden="true"/>
            <span class="name">Facebook</span>
          </a>
        </li>
        <li>
          <a href="//twitter.com/popup_concerts" target="_blank" class="twitter" title="Twitter">
            <i class="fa fa-twitter" aria-hidden="true"/>
            <span class="name">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="//instagram.com/popup_concerts"
            target="_blank"
            class="instagram"
            title="Instagram"
          >
            <i class="fa fa-instagram" aria-hidden="true"/>
            <span class="name">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:team@popupconcerts.org?subject=Hello!"
            target="_self"
            class="email"
            title="Email"
          >
            <i class="fa fa-envelope-o" aria-hidden="true"/>
            <span class="name">Email</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="footer-attribution">
      <h5>© PopUp Concerts 2016-{{ currentYear }}</h5>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear: function() {
      return new Date().getFullYear()
    }
  }
}
</script>
