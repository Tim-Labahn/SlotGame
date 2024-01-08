<template>
  <div
    class="border border-dark rounded-5 d-flex flex-column align-items-center justify-content-end"
    style="width: 80vw; height: 80vh; background-color: #ffd700"
  >
    <Rows></Rows>
    <button
      @click="spin"
      :disabled="spinning"
      class="btn btn-danger btn-lg rounded-circle mb-3"
      style="width: 100px; height: 100px; font-size: 18px; cursor: pointer"
    >
      Spin {{ spinning }}
    </button>
  </div>
</template>

<script setup lang="ts">
import Rows from "../components/Rows.vue";
import { spin, spinning } from "../game";
</script>
