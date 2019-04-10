<template>
  <section v-if="donationAmount">
    <h1>Donate {{ donationAmount }}€</h1>
    <p>Bitte wähle deine Zahlungsmethode aus:</p>
    <div>
      <button
        @click="launchStripe(donationAmount)"
        class="btn btn-inverse selectPayment creditCard"
      >
        <i class="fa fa-credit-card" aria-hidden="true"></i> Credit Card
      </button>
      <button @click="launchPaypal(donationAmount)" class="btn btn-inverse selectPayment payPal">
        <i class="fa fa-paypal" aria-hidden="true"></i> Paypal
      </button>
      <button @click="launchStripe(donationAmount)" class="btn btn-inverse selectPayment applePay">
        <i class="fa fa-apple" aria-hidden="true"></i> Apple Pay
      </button>
    </div>
  </section>
  <section v-else>
    <h1>Donate</h1>
    <p>Wir sind überzeugt, mit den PopUp Concerts ein besonderes Projekt geschaffen zu haben, das den notwendigen Schwung mitbringt, um die Welt der Klassik mit einem lockeren Format in untypischen Locations zu kombinieren. Deine Unterstützung trägt dazu bei, noch mehr jungen Menschen ihr erstes klassisches Musikerlebnis zu ermöglichen! Hier einige Beispiele, wie dein Beitrag helfen kann:</p>
    <div>
      <ul>
        <li>50€ helfen, die Werbetrommel zu rühren und Poster, Flyer, und Sichtbarkeit auf Social Media für das nächste PopUp Concert herzustellen</li>
        <li>100€ finanzieren für das nächste PopUp Concert die nötige Licht- und Soundtechnik</li>
        <li>300€ ermöglichen ein komplettes PopUp Concert mit Solist oder Duo</li>
        <li>500€ ermöglichen ein komplettes PopUp Concert mit einem größeren Ensemble</li>
        <li>1.000€ ermöglichen Klaviermiete und -transport sowie Foto- oder Videoaufzeichnung für ein PopUp Concert</li>
      </ul>
      <p>Spende jetzt auf unser Vereinskonto und trage dazu bei, die Botschaft der klassischen Musik in die nächsten Generationen zu verbreiten!</p>
      <br>
      <p>
        Unsere Bankverbindung:
        <br>Musik- und Kulturverein PopUp Concerts
        <br>IBAN: AT88 2011 1838 1399 9000
        <br>BIC: GIBAATWWXXX
      </p>
      <br>
      <div>
        <p>Oder spende direkt online:</p>
        <input
          type="text"
          v-model="enterAmount"
          style="padding: 14px; margin-right:15px;"
          placeholder="Betrag in €"
        >
        <button
          @click="launchStripeCustom"
          style="width: auto; display: inline; margin-right:15px;"
          class="btn btn-inverse selectPayment creditCard"
        >
          <i class="fa fa-credit-card" aria-hidden="true"></i> Credit Card
        </button>
        <button
          @click="launchPaypalCustom"
          style="width: auto; display: inline; margin-right:15px;"
          class="btn btn-inverse selectPayment payPal"
        >
          <i class="fa fa-paypal" aria-hidden="true"></i> Paypal
        </button>
        <button
          @click="launchStripeCustom"
          style="width: auto; display: inline; margin-right:15px;"
          class="btn btn-inverse selectPayment applePay"
        >
          <i class="fa fa-apple" aria-hidden="true"></i> Apple Pay
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '@nuxtjs/axios'

export default {
  head: function() {
    return {
      title: 'Donate | PopUp Concerts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PopUp Concerts: Donations'
        }
      ]
    }
  },
  data() {
    return {
      // stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      enterAmount: null,
      donationAmount: null
    }
  },
  mounted() {
    this.checkAmount()
  },
  methods: {
    checkAmount() {
      // if (process.browser) {
      const amount = parseInt(
        window.location.pathname.substr(
          window.location.pathname.lastIndexOf('/') + 1
        )
      )
      this.donationAmount = amount || null
      // }
    },
    launchStripeCustom() {
      this.launchStripe(parseInt(this.enterAmount))
    },
    launchPaypalCustom() {
      this.launchPaypal(parseInt(this.enterAmount))
    },
    async launchStripe(amount) {
      // eslint-disable-next-line no-undef
      const session = await this.$axios.$get(
        'https://wt-32a7736e460e1c36659d4fcab126ad51-0.sandbox.auth0-extend.com/popupconcerts-stripe-session',
        {
          params: {
            amount: amount * 100
          }
        }
      )
      // eslint-disable-next-line no-undef
      const stripe = Stripe('pk_test_UtZk9ETtfOcd6HKrNvfIjkJx', {
        betas: ['checkout_beta_4']
      })

      stripe
        .redirectToCheckout({
          sessionId: session.id
        })
        .then(function(result) {
          // Display result.error.message to your customer
        })
    },
    launchPaypal(amount) {
      if (process.browser) {
        window.open(`https://paypal.me/popupconcerts/${amount}`, '_blank')
      }
    }
  }
}
</script>

<style scoped>
.selectPayment {
  display: block;
  width: 100%;
  color: #fff;
  cursor: pointer;
  margin: 15px 15px 0 0;
}
.creditCard {
  background: #16a085;
}
.payPal {
  background: #003087;
}
.applePay {
  background: #000;
}
ul {
  list-style: initial;
  padding: 10px;
}
li {
  padding: 10px 0;
  line-height: 2rem;
}
</style>
