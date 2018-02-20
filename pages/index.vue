<template>
  <section class="p-4">
    <h1>{{count}}</h1>
    <button @click="increment" class="bg-blue text-white py-2 px-4 rounded">+</button>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex"

export default {
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["increment"])
  }
}
</script>