<script setup lang="ts">
import Row from "../components/Row.vue";
import { spinning, reels } from "../game";
</script>

<template>
  <div class="flex-grow-1 d-flex justify-content-around align-items-center">
    <div
      v-for="(reel, index) in reels"
      :key="index"
      class="reel border border-3 border-dark rounded-3 bg-light p-2 d-flex flex-column align-items-center mx-4"
      :class="{ active: spinning }"
      style="width: 250px; height: 400px"
    >
      <Row :reel="reel"></Row>
    </div>
  </div>
</template>
