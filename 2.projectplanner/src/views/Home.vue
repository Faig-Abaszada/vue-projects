<template>
  <div class="home">
      <FilterNav @filterChange="currentNav = $event" :currentNav="currentNav"/>
     <div v-if="projects.length">
       <div v-for="project in filteredProjects" :key="project.id">
          <SingleProject :project="project" @delete="handleDelete" @done="handleDone"/>
       </div>
     </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject";
import FilterNav from "../components/FilterNav";

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterNav
  },
  data() {
    return {
      projects: [],
      currentNav: 'all',
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
  },
  computed: {
    filteredProjects() {
      if (this.currentNav === 'completed') {
        return this.projects.filter((project) => {
          // project.complete db.json-da true veya false ola biler true ise arrayda qalacaq
          return project.complete
        })
      }
      if (this.currentNav === 'ongoing') {
        return this.projects.filter((project) => {
          // project.complete db.json-da true veya false ola biler true ise arrayda qalacaq
          return !project.complete
        })
      }
      return this.projects;
    }

  }
}
</script>
