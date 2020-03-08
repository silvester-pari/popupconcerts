<template>
  <div>
    <tag-line></tag-line>
    <next-event></next-event>
    <photo-gallery></photo-gallery>
  </div>
</template>

<script>
import TagLine from '@/sections/TagLine.vue'
import PhotoGallery from '@/sections/PhotoGallery.vue'
import NextEvent from '@/sections/NextEvent.vue'

export default {
  head: function() {
    return {
      title: 'PopUp Concerts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We organize and support classical music concerts in unusual locations. Bars, clubs, restaurants, shops, private homes become PopUp stages for young musicians!'
        }
      ]
    }
  },
  components: {
    TagLine,
    PhotoGallery,
    NextEvent
  }
}
</script>

<style>
/* Transitions using the page hook */
page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
