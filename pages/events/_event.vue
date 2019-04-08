<template>
  <section id="eventpage-single">
    <nuxtdown-body class="body" :body="event.body"/>
    <button-row :location="'single'"></button-row>
  </section>
</template>

<script>
import ButtonRow from '@/components/ButtonRow.vue'

export default {
  head: function() {
    return {
      title: `${this.event.title} | PopUp Concerts`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.event.description
        }
      ]
    }
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      event: (await app.$content('/events').get(route.path)) || payload
    }
  }
}
</script>
