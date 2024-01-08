<script setup lang="ts">
const props = defineProps(["reel"]);
props;
</script>
<template>
  <div
    v-for="(symbol, symbolIndex) in reel"
    :key="symbolIndex"
    class="fs-1 fw-bold my-4 d-flex"
  >
    <div v-if="symbolIndex < 3">
      {{ symbol }}
    </div>
  </div>
</template>
