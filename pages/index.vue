<template>
  <section class="p-4">
    <h2>Todos</h2>
    <fieldset class="list-reset text-lg">
      <div :key="todo.id" v-for="todo of todos">
        <input type="checkbox" :id="todo.id" :checked="todo.done" @change="toggle(todo)" class="opacity-0">
        <label :for="todo.id" class="px-2 cursor-pointer hover:font-bold" :class="{'line-through':todo.done}">{{todo.text}}</label>
        <span v-if="todo.done" class="text-green">✔</span>
      </div>
    </fieldset>
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
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["toggle"])
  }
}
</script>