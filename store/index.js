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
    },
    toggle(state, todo) {
        state.todos = state.todos.map(t =>
            t.id === todo.id
                ? todo
                : t
        )
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
    },

    async toggle({commit}, todo) {
        const res = await axios.patch(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`,
            {
                complete: !todo.complete
            })

        commit('toggle', res.data)
    }
}