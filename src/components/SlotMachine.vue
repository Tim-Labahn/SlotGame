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
      Spin
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

function spin(rotationsPerReel = undefined) {
  if (spinning.value) return;

  spinning.value = true;

  const totalSpins = rotationsPerReel ? rotationsPerReel : getRandomRotations();
  let spins = 0;

  const spinInterval = setInterval(() => {
    reels.value = reels.value.map((a) => [a[a.length - 1], ...a].slice(0, -1));
    console.log(reels.value);

    spins++;
    if (spins === totalSpins) {
      clearInterval(spinInterval);
      spinning.value = false;
    }
  }, 500); // Adjust the interval duration (in milliseconds) to control the spinning speed
}

function getRandomRotations() {
  return Math.floor(Math.random() * 10) + 1; // Adjust the range as needed
}
</script>
