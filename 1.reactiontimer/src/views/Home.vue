<template>
  <div class="home">
    <h1>Reaction Timer App</h1>
    <button @click="startGame" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @reactiontime="finishGame"/>
    <Result v-if="showResult" :score="score"/>
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
      score: null,
    }
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      this.showResult = false;
    },
    finishGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    }

  }
}
</script>
