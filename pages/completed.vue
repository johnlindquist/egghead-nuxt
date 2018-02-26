<template>
  <section class="p-4">
    <h2>Todos</h2>
    <ul class="list-reset text-lg">
      <li :key="todo.id" v-for="todo of completedTodos">
        {{todo.text}}
      </li>
    </ul>
  </section>
</template>
<script>
import {
  mapGetters,
  mapActions,
  mapMutations
} from "vuex"

export default {
  computed: {
    ...mapGetters(["completedTodos"])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["toggle"])
  }
}
</script>