<template>
  <div class="button-row">
    <a
      v-if="location == 'frontpage' || location == 'events'"
      :href="`/events/${event.slug}/`"
      :title="eventTitle"
      :class=" location == 'frontpage' ? 'frontpage-fb-more btn btn-inverse' : 'eventpage-pu-more btn' "
    >More</a>

    <a
      v-if=" location == 'events' || location == 'single' "
      :href="eventFbLink"
      target="blank"
      :title="eventTitle + 'on Facebook'"
      class="eventpage-fb-more btn btn-inverse"
    >Event on Facebook</a>
    <button
      v-if="upcoming"
      class="btn btn-inverse"
      :class=" location == 'frontpage' ? 'frontpage-addtocal' : 'eventpage-addtocal' "
      @click="addToCal"
    >
      <a :href="eventGoogleCal" target="blank">
        <div ref="gCal" class="gCal">
          +
          <i class="fa fa-google" aria-hidden="true"></i>
        </div>
      </a>
      <a :href="eventICal" target="blank">
        <div ref="iCal" class="iCal">+ ICAL</div>
      </a>
      Add To Calendar
    </button>
  </div>
</template>

<script>
export default {
  props: ['location', 'event'],
  data() {
    return {
      eventTitle: this.event.title,
      eventFbLink: this.event.fbLink,
      eventLink: this.event.permalink
    }
  },
  computed: {
    upcoming() {
      return Date.parse(this.event.startDate) > Date.now()
    },
    eventGoogleCal() {
      const evUrl = encodeURIComponent(this.event.fbLink)
      const evName = this.event.title.replace('#', '%23')
      const evDescription = encodeURIComponent(this.event.body)
        .replace('/\r|\n/', '%0A')
        .replace('#', '%23')

      const evStart = encodeURIComponent(this.gDate(this.event.startDate))
      const evEnd = encodeURIComponent(this.gDate(this.event.endDate))

      const location = this.event.location
      const evLocation = encodeURIComponent(
        `${location.locationName}, ${location.street}, ${location.postCode}, ${
          location.city
        }`
      )

      return `https://www.google.com/calendar/event?action=TEMPLATE&text=${evName}&dates=${evStart}/${evEnd}&details=${evDescription}&location=${evLocation}&trp=false&sprop=website:${evUrl}&ctz=Europe/Vienna`
    },
    eventICal() {
      const evUrl = encodeURIComponent(this.event.fbLink)
      const evName = this.event.title.replace('#', '%23')
      const evDescription = encodeURIComponent(this.event.body)
        .replace('/\r|\n/', '%0A')
        .replace('#', '%23')

      const evStart = encodeURIComponent(this.iDate(this.event.startDate))
      const evEnd = encodeURIComponent(this.iDate(this.event.endDate))

      const location = this.event.location || 'T.B.A.'
      const evLocation = encodeURIComponent(
        `${location.locationName}, ${location.street}, ${location.postCode}, ${
          location.city
        }`
      )

      return `https://addtocalendar.com/atc/ical?f=m&e[0][date_start]=${evStart}&e[0][date_end]=${evEnd}&e[0][timezone]=Europe/Vienna&e[0][title]=${evName}&e[0][description]=${evDescription}%0A${evUrl}&e[0][location]=${evLocation}&e[0][organizer]=PopUp+Concerts&e[0][privacy]=public`
    }
  },
  methods: {
    addToCal() {
      this.$refs.gCal.classList.add('show')
      this.$refs.iCal.classList.add('show')
    },
    gDate(date) {
      const tzoffset = new Date(date).getTimezoneOffset() * 60000 // offset in milliseconds
      return new Date(new Date(date) - tzoffset)
        .toISOString()
        .replace(/[-:]/g, '')
        .split('.')[0]
    },
    iDate(date) {
      const tzoffset = new Date(date).getTimezoneOffset() * 60000 // offset in milliseconds
      return new Date(new Date(date) - tzoffset).toISOString().split('.')[0]
    }
  }
}
</script>

<style>
</style>
