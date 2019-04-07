<template>
  <section id="eventpage-single">
    <div class="eventpage-next-container">
      <div class="eventpage-event-desktop-container">
        <h1>PopUp Concert #07</h1>
        <div class="eventpage-fb-eventcover">
          <a
            href="https://www.facebook.com/events/579677072529255/"
            target="blank"
            title="PopUp Concert #07 on Facebook"
          >
            <img
              class
              src="https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/55244484_861778120828126_7191151953731125248_o.jpg?_nc_cat=108&_nc_ht=scontent.xx&oh=7fdc8cb28b7d4130ce00401735ac0c32&oe=5D052F3C"
              alt="PopUp Concert #07"
            >
          </a>
        </div>
        <p class="eventpage-fb-eventdescription">
          KLASSISCH & ANDERS
          <br>
          <br>Es geht weiter! Diesmal mit einer exklusiven und ungewöhnlichen Mischung: Posaune & Schlagwerk.
          <br>Schau im Ludwig & Adele vorbei & schau's dir an - ein wenig klassisch, ein wenig anders!
          <br>
          <br>WO
          <br>Kollektiv Ludwig & Adele
          <br>Im Künstlerhaus
          <br>Akademiestraße 13
          <br>1010 Wien
          <br>
          <br>WANN
          <br>Freitag, 12. April 2019
          <br>Einlass 21:30 | Beginn 22:00
          <br>
          <br>WER
          <br>Gabriel Antão | Posaune
          <br>Joachim Murnig | Schlagwerk
          <br>
          <br>WAS
          <br>Bernstein, Jobim, Zambito, Calissi, Wright +
          <br>
          <br>WIEVIEL
          <br>Pay as you wish!
          <br>(Freie Spende)
          <br>
          <br>facebook.com/popupconcerts
          <br>popupconcerts.org
        </p>
        <button-row :location="'single'"></button-row>
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
      eventTitle: 'PopUp Concert #07',
      eventDescription: `PopUp Concert #07 </br>
												KLASSISCH & ANDERS<br /><br />Es geht weiter! Diesmal mit einer exklusiven und ungewöhnlichen Mischung: Posaune & Schlagwerk.<br />Schau im Ludwig & Adele vorbei & schau's dir an - ein wenig klassisch, ein wenig [...]
      `,
      eventFbLink: 'https://www.facebook.com/events/579677072529255/',
      eventCover:
        'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/55244484_861778120828126_7191151953731125248_o.jpg?_nc_cat=108&_nc_ht=scontent.xx&oh=7fdc8cb28b7d4130ce00401735ac0c32&oe=5D052F3C',
      eventSlug: 'popup-concert-07',
      eventGoogleCal: `https://www.google.com/calendar/event?action=TEMPLATE&text=PopUp Concert %2307&dates=20190412T220000/20190412T233000&details=KLASSISCH & ANDERS%0A%0AEs geht weiter! Diesmal mit einer exklusiven und ungewöhnlichen Mischung: Posaune & Schlagwerk.%0ASchau im Ludwig & Adele vorbei & schau's dir an - ein wenig klassisch, ein wenig anders!%0A%0AWO%0AKollektiv Ludwig & Adele%0AIm Künstlerhaus%0AAkademiestraße 13%0A1010 Wien%0A%0AWANN%0AFreitag, 12. April 2019 %0AEinlass 21:30 | Beginn 22:00%0A%0AWER%0AGabriel Antão | Posaune%0AJoachim Murnig | Schlagwerk%0A%0AWAS%0ABernstein, Jobim, Zambito, Calissi, Wright  +%0A%0AWIEVIEL%0APay as you wish!%0A(Freie Spende)%0A%0Afacebook.com/popupconcerts%0Apopupconcerts.org&location=Kollektiv%20Ludwig%20&%20Adele%2C%20Akademiestraße%2013%2C%201010%2C%20Vienna&trp=false&sprop=website:https://www.facebook.com/events/579677072529255/&ctz=Europe/Vienna`,
      eventICal: `https://addtocalendar.com/atc/ical?f=m&e[0][date_start]=2019-04-12T22:00:00&e[0][date_end]=2019-04-12T23:30:00&e[0][timezone]=Europe/Vienna&e[0][title]=PopUp Concert %2307&e[0][description]=KLASSISCH & ANDERS%0A%0AEs geht weiter! Diesmal mit einer exklusiven und ungewöhnlichen Mischung: Posaune & Schlagwerk.%0ASchau im Ludwig & Adele vorbei & schau's dir an - ein wenig klassisch, ein wenig anders!%0A%0AWO%0AKollektiv Ludwig & Adele%0AIm Künstlerhaus%0AAkademiestraße 13%0A1010 Wien%0A%0AWANN%0AFreitag, 12. April 2019 %0AEinlass 21:30 | Beginn 22:00%0A%0AWER%0AGabriel Antão | Posaune%0AJoachim Murnig | Schlagwerk%0A%0AWAS%0ABernstein, Jobim, Zambito, Calissi, Wright  +%0A%0AWIEVIEL%0APay as you wish!%0A(Freie Spende)%0A%0Afacebook.com/popupconcerts%0Apopupconcerts.org&e[0][location]=Kollektiv%20Ludwig%20&%20Adele%2C%20Akademiestraße%2013%2C%201010%2C%20Vienna&e[0][organizer]=PopUp+Concerts&e[0][privacy]=public`
    }
  },
  computed: {
    eventLink() {
      return `/events/${this.eventSlug}/`
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
