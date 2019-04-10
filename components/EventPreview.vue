<template>
  <div>
    <a :id="event.title" :href="`/events/${event.slug}/`" :title="event.title">
      <h2>{{ event.title }}</h2>
      <div class="eventpage-fb-eventcover">
        <img :src="event.cover" :alt="event.title">
      </div>
    </a>

    <button-row :location="'events'" :event="event"></button-row>
  </div>
</template>

<script>
import ButtonRow from '@/components/ButtonRow.vue'
export default {
  components: {
    ButtonRow
  },
  props: ['eventId'],
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

<style scoped>
#eventpage-events .eventpage-fb-eventcover img {
  max-width: 720px !important;
}
</style>
