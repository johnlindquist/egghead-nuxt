<template>
  <div class="p-4">
    <h1>{{error.message}}</h1>
  </div>
</template>
<script>
export default {
  props: ["error"]
}
</script>