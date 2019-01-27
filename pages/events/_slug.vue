<template>
    <section id ="eventpage-single"> 
        Test
    </section>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>
