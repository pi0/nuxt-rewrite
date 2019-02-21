<template>
<div>
  {{ message }}
</div>
</template>

<script>
export default {
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    message() {
      return `Hello! Path: ${this.$route.path} Query: ${JSON.stringify(this.$route.query)}`
    }
  }
}
</script>
