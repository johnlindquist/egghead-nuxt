import axios from 'axios'

export const state = {
    todos: []
}

export const mutations = {
    init(state, todos) {
        state.todos = todos
    },
    add(state, todo) {
        state.todos = [...state.todos, todo]
    },
    remove(state, todo) {
        state.todos = state.todos.filter(t => t.id != todo.id)
    }
}

export const actions = {
    async add({commit}, task) {
        const res = await axios.post('https://todos-cuvsmolowg.now.sh/todos',
            { task, complete: false })

        commit('add', res.data)
    },

    async remove({commit}, todo) {
        const res = await axios.delete(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`)

        commit('remove', todo)
    }
}