<template>
  <form>
    <label>Title</label>
    <input type="text" required v-model="title">
    <label>Details</label>
    <textarea required v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      title: '',
      details: '',
    }
  },
  mounted() {

  }
}
</script>

