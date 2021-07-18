<template>
  <div class="home">
    <h1>Reaction Timer App</h1>
    <button @click="startGame">Play</button>
    <Block />
    <Result />
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
  methods: {
    startGame() {}

  }
}
</script>
