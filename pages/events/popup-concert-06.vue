<template>
  <section id="eventpage-single">
    <div class="eventpage-next-container">
      <div class="eventpage-event-desktop-container">
        <h1>{{event.title}}</h1>
        <div class="eventpage-fb-eventcover">
          <a :href="event.fbLink" target="blank" :title="`${event.title} on Facebook`">
            <img :src="event.cover" :alt="event.title">
          </a>
        </div>
        <p class="eventpage-fb-eventdescription" v-html="event.body"></p>
        <button-row :location="'single'" :event="event"></button-row>
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
  data() {
    return {
      eventId: 6
    }
  },
  computed: {
    event() {
      return this.$store.state.events.events.find(x => x.id === this.eventId)
    },
    eventLink() {
      return `/events/${this.event.slug}/`
    }
  },
  methods: {
    addToCal() {
      this.$refs.gCal.classList.add('show')
      this.$refs.iCal.classList.add('show')
    }
  }
}
</script>

<style>
</style>
