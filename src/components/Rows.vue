<script setup lang="ts">
import { machine } from "../game";
</script>
<template>
  <div class="d-flex justify-content-between w-100 mb-2">
    <div v-for="row in machine.rows">{{ row }}</div>
  </div>
</template>

<style scoped lang="scss">
.slot-machine {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin: 0 2px;
}
</style>
