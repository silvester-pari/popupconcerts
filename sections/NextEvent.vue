<template>
  <section id="frontpage-nextevent">
    <h1># {{ tagLine }}</h1>
    <div class="frontpage-fb-eventcover">
      <a :href="`/events/${event.slug}/`" :title="event.title">
        <img class :src="event.cover" :alt="event.title">
      </a>
    </div>
    <div class="frontpage-nextevent-desktop-container">
      <h1># {{ tagLine }}</h1>
      <a :href="`/events/${event.slug}/`" :title="event.title">
        <p class="frontpage-fb-eventdescription" v-html="eventShortDescription"></p>
      </a>
      <button-row :location="'frontpage'" :event="event"></button-row>
    </div>
  </section>
</template>

<script>
import ButtonRow from '@/components/ButtonRow.vue'
export default {
  components: {
    ButtonRow
  },
  computed: {
    event() {
      const upcomingEvents = this.$store.state.events.events.filter(
        d => Date.parse(d.startDate) > Date.now()
      )
      if (upcomingEvents.length === 0) {
        const pastEvents = this.$store.state.events.events.filter(
          d => Date.parse(d.startDate) < Date.now()
        )
        return pastEvents[0]
      } else {
        return upcomingEvents[upcomingEvents.length - 1]
      }
    },
    tagLine() {
      return Date.parse(this.event.startDate) > Date.now() ? 'Next' : 'Previous'
    },
    eventShortDescription() {
      return this.truncateText(this.event.body, 30, '[...]')
    }
  },
  methods: {
    addToCal() {
      this.$refs.gCal.classList.add('show')
      this.$refs.iCal.classList.add('show')
    },
    truncateText(text, limit, after) {
      if (!text || !limit) return
      let content = text.trim()
      content = content.split(' ').slice(0, limit)
      content = content.join(' ') + (after || '')
      return content
    }
  }
}
</script>

<style>
</style>
