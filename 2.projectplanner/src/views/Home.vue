<template>
  <div class="home">
     <div v-if="projects.length">
       <div v-for="project in projects" :key="project.id">
         <p>{{ project.title }}</p>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {

  }
}
</script>
