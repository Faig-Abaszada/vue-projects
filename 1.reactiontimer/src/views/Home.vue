<template>
  <div class="home">
    <h1>Reaction Timer App</h1>
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
  }
}
</script>
