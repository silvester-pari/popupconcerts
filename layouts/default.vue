<template>
  <div>
    <NavHeader />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import Footer from '@/components/Footer'

export default {
  components: {
    NavHeader,
    Footer
  }
}
</script>

<style>
</style>
