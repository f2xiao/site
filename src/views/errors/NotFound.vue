<template>
  <div>
    <a class="styled-link" href="/site" aria-label="Home">←</a>
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted: function () {
    document.title = "404"
  }
}
</script>