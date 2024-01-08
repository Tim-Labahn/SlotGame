<script setup lang="ts">
import { spinning, reels } from "../game";
</script>
<template>
  <div
    v-for="(symbols, index) in reels"
    :key="index"
    class="reel border border-3 border-dark rounded-3 bg-light p-2 d-flex flex-column align-items-center me-5"
    :class="{ active: spinning }"
    style="width: 250px; height: 400px"
  >
    <div
      v-for="(symbol, symbolIndex) in symbols"
      :key="symbolIndex"
      :class="{ highlight: spinning && symbolIndex === 0 }"
      style="font-weight: bold; font-size: 24px; margin-bottom: 10px"
    >
      {{ symbol }}
    </div>
  </div>
</template>
