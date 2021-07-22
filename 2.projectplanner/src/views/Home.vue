<template>
  <div class="home">
     <div v-if="projects.length">
       <div v-for="project in projects" :key="project.id">
          <SingleProject :project="project" @delete="handleDelete" @done="handleDone"/>
       </div>
     </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject";

export default {
  name: 'Home',
  components: {
    SingleProject
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== project.id;
      })
    },
    handleDone(id) {
      let grabbedProject = this.projects.find(project => {
        return project.id === id;
      })
      grabbedProject.complete = !grabbedProject.complete;
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => {
        return res.json();
      }).then(data => {
        this.projects = data;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>
