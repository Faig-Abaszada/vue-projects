<template>
  <div class="home">
    <h1>Reaction Timer App</h1>
    <button @click="startGame">Play</button>
    <Block v-if="isPlaying" :delay="delay"/>
    <Result v-if="showResult"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Block from "../components/Block";
import Result from "../components/Result";

export default {
  name: 'Home',
  components: {
    Block,
    Result,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      showResult: false,
    }
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
    }

  }
}
</script>
