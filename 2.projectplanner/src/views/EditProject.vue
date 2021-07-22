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
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id
    }
  },
  mounted() {
      fetch(this.uri)
        .then((res) => {
          return res.json();
        }).then(data => {

        this.title = data.title;
        this.details = data.details;

      }).catch((err) => {
        console.log(err);
      })
  }
}
</script>

