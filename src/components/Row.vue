<script setup lang="ts">
import { spinning, reels } from "../game";
</script>
<template>
  <div
    v-for="(symbols, index) in reels"
    :key="index"
    class="reel border border-3 border-dark rounded-3 bg-light"
    :class="{ active: spinning }"
    style="
      /* border: 3px solid #000000;
      border-radius: 10px; */
      padding: 20px;
      width: 100px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      transition: border-color 0.5s ease-in-out;
    "
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
