@@ -0,0 +1,17 @@
<template>
  <div class="block" v-if="showBlock">
     STOP Timer!
  </div>
</template>

<script>

export default {
  props: ['delay'],
  components: {
  },
  data() {
    return {
      showBlock: false
    }
  }
}
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
