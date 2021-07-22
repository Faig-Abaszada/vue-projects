<template>
  <nav class="filter-nav">
    <button >View all</button>
    <button >Completed</button>
    <button >Ongoing</button>
  </nav>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
