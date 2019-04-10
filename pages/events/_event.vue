<template>
  <section id="eventpage-single">
    <div class="eventpage-next-container">
      <div class="eventpage-event-desktop-container">
        <h1>{{ event.title }}</h1>
        <div class="eventpage-fb-eventcover">
          <a :href="event['fb-link']" target="blank" :title="event.title + ' on Facebook'">
            <img class :src="event.thumbnail" :alt="event.title">
          </a>
        </div>

        <nuxtdown-body class="eventpage-fb-eventdescription" :body="event.body"/>

        <button-row :event="event" :location="'single'"></button-row>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonRow from '@/components/ButtonRow.vue'

export default {
  components: {
    ButtonRow
  },
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
