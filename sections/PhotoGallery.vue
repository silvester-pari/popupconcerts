<template>
  <section id="frontpage-photogallery" class="full-width">
    <a
      v-for="(post, key) in posts"
      :key="key"
      class="square"
      :href="`https://www.instagram.com/p/${post}`"
      target="_blank"
      :style="`background-image: url('https://www.instagram.com/p/${post}/media/?size=${imgSize}')`"
    >
      <div class="content"><i aria-hidden="true" class="fa fa-instagram"></i></div>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgSize: 't',
      posts: [
        'BwXb-HlAn3e',
        'BwUw1gwACDh',
        'BwROZKIgIbd',
        'BwOzPDPgvo3',
        'BgcSg9ph7mr',
        'BgcSZ2The_i',
        'Bgb5scKBxYU',
        'BgZT8dnh5T7',
        'BeFu-WtFNCC',
        'BeFTcSJFtfK',
        'BeD-BfWFNVw',
        'BeDzEdKFn65',
        'Bbh54s6lsp8',
        'Bbh52SLFkSf',
        'Bbh5xnZlxef',
        'Bbh5uuBlM_c',
        'Bbhfv5bl9jQ',
        'BVow72oFiln',
        'BVows-slsIk',
        'BVkWUWHFT7B',
        'BUg6KsYlW7V',
        'BUYzuVfFOWJ',
        'BUYzb4oFuoN',
        'BUYzT50ltx9'
      ]
    }
  },
  mounted() {
    this.imgSize = window.innerWidth > 500 ? 'm' : 't'
  }
}
</script>
