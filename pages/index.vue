<template>
  <div>
    <tag-line></tag-line>
    <next-event></next-event>
  </div>
</template>

<script>
import TagLine from '@/sections/TagLine.vue'
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
    NextEvent
  }
}
</script>

<style scoped>
</style>
