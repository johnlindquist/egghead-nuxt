export const state = () => ({
  count: 0
})

export const mutations = {
  increment(state) {
    state.count++
  },
  reset(state) {
    state.count = 0
  }
}

export const actions = {
  incrementAction({ state, commit }) {
    if (state.count === 3) {
      commit("reset")
    } else {
      commit("increment")
    }
  }
}
