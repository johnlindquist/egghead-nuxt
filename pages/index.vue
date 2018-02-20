<template>
  <section class="p-4">
    <h1>{{count}}</h1>
  </section>
</template>
<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["count"])
  }
}
</script>