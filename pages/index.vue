<template>
  <section class="p-4">
    <h2>Todos</h2>
    <ul class="list-reset text-lg">
      <li :key="todo.id" v-for="todo in todos" class="py-2 border px-2">
        {{todo.text}}
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions([])
  }
}
</script>