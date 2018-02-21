export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
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
  }
}
