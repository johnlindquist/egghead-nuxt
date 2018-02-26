<template>
  <section>
    <h2 class="flex justify-center">Todos</h2>
    <form @submit.prevent="add" class="py-4">
      <input type="text" v-model="text">
      <input type="submit" value="Add">
    </form>
    <fieldset class="list-reset text-lg">
      <div :key="todo.id" v-for="todo of todos" class="pt-1">
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
    ...mapState(["todos"]),
    text: {
      get() {
        return this.$store.state.text
      },
      set(value) {
        this.$store.commit("setText", value)
      }
    }
  },
  methods: {
    ...mapActions(["toggle", "add"]),
    ...mapMutations([])
  }
}
</script>