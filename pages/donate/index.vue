<template>
  <section v-if="donationAmount">
    <h1>Donate: {{ donationAmount }}€</h1>
    <p>Bitte wähle deine Zahlungsmethode aus:</p>
    <div class="paymentContainer">
      <button
        @click="launchStripe(donationAmount)"
        class="btn btn-inverse selectPayment creditCard"
      >
        <i class="fa fa-credit-card" aria-hidden="true"></i> Kreditkarte
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
      <div class="paymentContainer">
        <p>
          Oder spende direkt online:
          <span v-if="enterAmount" style="font-weight: bold;">{{enterAmount}}€</span>
        </p>
        <div v-if="loading" class="loadingOverlay">
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
        <input v-model="enterAmount" class="enterAmount" placeholder="Betrag in €">
        <button
          @click="launchStripeCustom"
          class="btn btn-inverse selectPayment creditCard"
          :disabled="!enterAmount"
        >
          <i class="fa fa-credit-card" aria-hidden="true"></i> Kreditkarte
        </button>
        <button
          @click="launchPaypalCustom"
          class="btn btn-inverse selectPayment payPal"
          :disabled="!enterAmount"
        >
          <i class="fa fa-paypal" aria-hidden="true"></i> Paypal
        </button>
        <button
          @click="launchStripeCustom"
          class="btn btn-inverse selectPayment applePay"
          :disabled="!enterAmount"
        >
          <i class="fa fa-apple" aria-hidden="true"></i> Apple Pay
        </button>
      </div>
      <p v-if="errorMsg">
        <br>
        {{ errorMsg }}
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

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
      donationAmount: null,
      loading: false,
      errorMsg: null
    }
  },
  mounted() {
    this.checkAmount()
  },
  methods: {
    checkAmount() {
      // if (process.browser) {
      const amount = parseInt(
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      )
      this.donationAmount = amount || null
      // }
    },
    launchStripeCustom() {
      this.loading = true
      this.launchStripe(parseInt(this.enterAmount))
    },
    launchPaypalCustom() {
      this.loading = true
      this.launchPaypal(parseInt(this.enterAmount))
    },
    launchStripe(amount) {
      this.errorMsg = null
      axios
        .get(
          'https://wt-32a7736e460e1c36659d4fcab126ad51-0.sandbox.auth0-extend.com/popupconcerts-stripe-session',
          {
            params: {
              amount: amount * 100
            }
          }
        )
        .then(response => {
          // eslint-disable-next-line no-undef
          const stripe = Stripe(process.env.STRIPE_PUBLIC_KEY, {
            betas: ['checkout_beta_4']
          })

          stripe
            .redirectToCheckout({
              sessionId: response.data.id
            })
            .then(function(result) {
              this.loading = false
              this.errorMsg =
                'Uh-oh! Etwas ist leider schiefgegangen... Bitte probiere es noch einmal.'
              // eslint-disable-next-line no-console
              console.log(result.error.message)
            })
        })
        .catch(error => {
          this.loading = false
          this.errorMsg =
            'Uh-oh! Etwas ist leider schiefgegangen... Bitte probiere es noch einmal.'
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    launchPaypal(amount) {
      if (process.browser) {
        window.open(`https://paypal.me/popupconcerts/${amount}`)
      }
    }
  }
}
</script>

<style scoped>
.paymentContainer {
  position: relative;
  display: flex;
  flex-direction: column;
}
.enterAmount {
  display: block;
  padding: 14px;
  margin: 5px 0;
}
.selectPayment {
  display: block;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  margin: 5px 0;
}
.selectPayment:disabled {
  cursor: not-allowed;
  opacity: 0.3;
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

.loadingOverlay {
  background: #f7f7f7;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 40px;
  height: 40px;
  position: absolute;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #16a085;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
