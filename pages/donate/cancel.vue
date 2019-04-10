<template>
  <section>
    <h1>Error</h1>
    <p>Etwas ist schiefgegangen - bitte kontaktiere uns!</p>
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
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.cryptedmail:after {
  content: attr(data-name) '@' attr(data-domain) '.' attr(data-tld);
}
</style>
