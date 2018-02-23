export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },
  toggle(state, todo) {
    state.todos = state.todos.map(
      t => (t.id === todo.id ? todo : t)
    )
  }
}

export const actions = {
  async nuxtServerInit(
    { commit },
    { app, error }
  ) {
    try {
      const todos = await app.$axios.$get(
        "http://localhost:3777/todos"
      )
      commit("setTodos", todos)
    } catch (e) {
      error("Services Offline :(")
    }
  },
  async toggle({ commit }, todo) {
    const response = await this.$axios.$patch(
      "http://localhost:3777/todos/" + todo.id,
      { done: !todo.done }
    )
    commit("toggle", response)
  }
}
