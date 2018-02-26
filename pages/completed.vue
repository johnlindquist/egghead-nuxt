<template>
  <section>
    <h2 class="flex justify-center">Todos</h2>
    <ul class="list-reset text-lg">
      <li class="px-4 py-1" :key="todo.id" v-for="todo of completedTodos">
        {{todo.text}}
      </li>
    </ul>
    <div class="flex justify-center">
      <button @click="clear" class="px-4 py-2 bg-grey rounded hover:bg-grey-light hover:text-red hover:font-extrabold">Clear</button>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex"

export default {
  computed: {
    ...mapGetters(["completedTodos"])
  },
  methods: {
    ...mapActions(["clear"])
  }
}
</script>