<template>
  <section class="p-4">
    <h2>Todos</h2>
    <ul class="list-reset text-lg">
      <li :key="todo.id" v-for="todo of todos">
        {{todo.text}}
      </li>
    </ul>
  </section>
</template>
<script>
import {
  mapState,
  mapActions,
  mapMutations
} from "vuex"

export default {
  computed: {
    ...mapState({
      todos: state =>
        state.todos.filter(todo => todo.done)
    })
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["toggle"])
  }
}
</script>