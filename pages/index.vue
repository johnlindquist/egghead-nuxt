<template>
  <div>
    {{counter}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  computed:{
    ...mapState({
      counter: state => state.counter      
    })
  },

  methods:{
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>