<template>
  <section id="eventpage-events">
    <div class="eventpage-next-container">
      <h1># Next</h1>
      <div class="eventpage-event-desktop-container">
        <event-preview v-for="event in upcomingEvents" :key="event.id" :eventId="event.id"/>
      </div>
    </div>
    <div class="eventpage-past-container">
      <h1># Past</h1>
      <div class="eventpage-event-desktop-container">
        <event-preview v-for="event in pastEvents" :key="event.id" :eventId="event.id"/>
      </div>
    </div>
  </section>
</template>

<script>
import EventPreview from '@/components/EventPreview.vue'
export default {
  components: {
    EventPreview
  },
  computed: {
    upcomingEvents() {
      return this.$store.state.events.events.filter(
        d => Date.parse(d.startDate) > Date.now()
      )
    },
    pastEvents() {
      return this.$store.state.events.events.filter(
        d => Date.parse(d.startDate) < Date.now()
      )
    }
  }
}
</script>

<style>
</style>
