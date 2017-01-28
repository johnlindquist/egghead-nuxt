<template>
  <div>
     <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Active Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}}. {{todo.task}}</span>          
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import {init} from './shared'
import {mapState} from 'vuex'

export default {

  fetch:init,

  computed:{
    ...mapState({
      todos: state => state.todos.filter(todo => !todo.complete)      
    })
  }
}
</script>
