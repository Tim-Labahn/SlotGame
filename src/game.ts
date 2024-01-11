import { ref } from "vue";

export let user = {
  money: 0,
};

export const reels = ref(
  [
    ["🍒", "🍒", "🍒", "🍋", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
    ["🍒", "🍒", "🍒", "🍋", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
    ["🍒", "🍒", "🍒", "🍋", "🍋", "🍊", "🍇", "🔔", "BAR", "7"],
  ].map((a) => a.sort(() => (Math.random() > 0.5 ? 1 : -1)))
);

export let spinning = ref(false);

export async function spin() {
  if (spinning.value) return;
  spinning.value = true;

  const rotations = [11, 17, 29]; // Adjust the total number of rotations for each reel

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

    const rotationDuration = 100; // Adjust the base interval duration (in milliseconds) to control the spinning speed
    await sleep(rotationDuration);
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
