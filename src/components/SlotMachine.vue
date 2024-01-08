<template>
  <div
    class="border border-dark rounded-5 d-flex flex-column align-items-center justify-content-end"
    style="width: 80vw; height: 80vh; background-color: #ffd700"
  >
    <div class="flex-grow-1 d-flex justify-content-around align-items-center">
      <div
        v-for="(symbols, index) in reels"
        :key="index"
        class="reel"
        :class="{ active: spinning }"
        style="
          border: 3px solid #6c757d;
          border-radius: 10px;
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
        <slot :name="`reel-${index}`">
          <div
            v-for="(symbol, symbolIndex) in symbols"
            :key="symbolIndex"
            :class="{ highlight: spinning && symbolIndex === 0 }"
            style="font-weight: bold; font-size: 24px; margin-bottom: 10px"
          >
            {{ symbol }}
          </div>
        </slot>
      </div>
    </div>

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
import { ref } from "vue";

const reels = ref([
  ["🍒", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
  ["🍒", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
  ["🍒", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
]);

const spinning = ref(false);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function spin() {
  if (spinning.value) return;
  spinning.value = true;

  const rotations = [10, 12, 15]; // Adjust the total number of rotations for each reel

  for (let i = 0; i < reels.value.length; i++) {
    spinReel(i, rotations[i]);
  }

  spinning.value = false;
}

async function spinReel(reelIndex: number, rotations: number) {
  for (let i = 0; i < rotations; i++) {
    reels.value[reelIndex] = [
      reels.value[reelIndex][reels.value[reelIndex].length - 1],
      ...reels.value[reelIndex],
    ].slice(0, -1);
    console.log(reels.value);

    const rotationDuration = 100; // Adjust the base interval duration (in milliseconds) to control the spinning speed
    await sleep(rotationDuration);
  }
}
</script>
