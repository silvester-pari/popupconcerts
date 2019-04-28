<template>
  <section id="contact">
    <div class="contact-content">
      <h1>Contact</h1>
      <p></p>
      <p>Musik- und Kulturverein PopUp Concerts</p>

      <p>Spallartgasse 6/604</p>

      <p>1140 Wien</p>

      <p>Österreich</p>

      <p>&nbsp;</p>

      <p>ZVR: 1923579624</p>

      <p>Vereinssitz: Wien</p>
      <style>
  .cryptedmail:after {
    content: attr(data-name) '@' attr(data-domain) '.' attr(data-tld);
  }
      </style>
      <br>
      <br>
      <p>
        <a
          data-name="team"
          data-domain="popupconcerts"
          data-tld="org"
          href="#"
          class="cryptedmail"
          onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld"
        ></a>
      </p>
      <p>
        <a href="http://www.popupconcerts.org">www.popupconcerts.org</a>
      </p>
    </div>
    <form
      id="contact-form"
      class="form js-simplecontactform InputfieldForm"
      name="contact-form"
      method="POST"
      action="/contact/success"
      data-colspacing="1"
      data-netlify="true"
    >
      <div class="form__item form__item--contact_name" id="wrap_Inputfield_contact_name">
        <label class="form__item--label" for="Inputfield_contact_name">Name</label>
        <input
          id="Inputfield_contact_name"
          class="InputfieldMaxWidth"
          name="contact_name"
          type="text"
          maxlength="2048"
        >
      </div>
      <div class="form__item form__item--contact_mail" id="wrap_Inputfield_contact_mail">
        <label class="form__item--label" for="Inputfield_contact_mail">Mail</label>
        <input
          id="Inputfield_contact_mail"
          name="contact_mail"
          class="FieldtypeEmail InputfieldMaxWidth"
          type="email"
          maxlength="512"
        >
      </div>
      <div class="form__item form__item--contact_message" id="wrap_Inputfield_contact_message">
        <label class="form__item--label" for="Inputfield_contact_message">Message</label>
        <textarea
          id="Inputfield_contact_message"
          class="FieldtypeTextarea InputfieldMaxWidth"
          name="contact_message"
          rows="5"
        ></textarea>
      </div>
      <div class="form__item">
         <div netlify-recaptcha></div> 
      </div>
      <div class="form__item form__item--submit" id="wrap_Inputfield_submit">
        <button id="Inputfield_submit" class="button" name="submit" value="Send" type="submit">
          <span class="ui-button-text">Send</span>
        </button>
      </div>
    </form>
    <div class="contact-mailchimp" style="justify-content: flex-start;">
      <h1>Mailing List: Next Concerts, News, Updates</h1>
      <!-- Begin MailChimp Signup Form -->
      <div id="mc_embed_signup">
        <form
          action="https://popupconcerts.us15.list-manage.com/subscribe/post?u=20cfe04f441f689f77a384cca&amp;id=a1dcc347bb"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <label for="mce-NAME">Name</label>
              <input type="text" value name="NAME" class="required" id="mce-NAME">
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">Mail</label>
              <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_20cfe04f441f689f77a384cca_a1dcc347bb" tabindex="-1" value>
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Sign Up"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              >
            </div>
          </div>
        </form>
      </div>

      <!--End mc_embed_signup-->
    </div>
  </section>
</template>

<script>
export default {
  head: function() {
    return {
      title: 'Contact | PopUp Concerts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with us!'
        }
      ]
    }
  }
}
</script>

<style scoped>
input {
  color: #171717;
}
#contact .contact-content {
  flex-basis: 50%;
}
</style>
