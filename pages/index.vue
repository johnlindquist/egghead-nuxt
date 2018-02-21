<template>
  <section class="p-4">
    <h1>{{count}}</h1>
    <button @click="incrementAction" class="bg-blue text-white py-2 px-4 rounded">+</button>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["incrementAction"])
  }
}
</script>