export const state = () => ({
  todos: [],
  text: ""
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },
  setText(state, text) {
    state.text = text
  },
  toggle(state, todo) {
    state.todos = state.todos.map(
      t => (t.id === todo.id ? todo : t)
    )
  },
  addTodo(state, todo) {
    state.todos.push(todo)
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
  },
  async add({ state, commit }) {
    const response = await this.$axios.$post(
      "http://localhost:3777/todos/",
      { text: state.text, done: false }
    )

    commit("addTodo", response)
  }
}
