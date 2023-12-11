<template>
  <section class="max-w-[1280px] px-[40px] mx-auto my-0 w-full">
    <div class="flex items-center flex-col justify-center">
      <span class="text-[72px] font-bold mb-[20px]"
        >{{ result }} <span class="text-[42px] text-casper">of</span>
        {{ questionsLength }}</span
      >
      <span class="text-[20px] font-bold mb-[60px]">{{ commentOutput() }}</span>
      <button
        class="p-[20px] flex items-center rounded-[20px] bg-purple cursor-pointer transition duration-150 hover:opacity-[70%] text-white font-bold text-[20px]"
        @click="$router.push('/')"
        type="button"
      >
        Go back
      </button>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$confetti.start({
      particlesPerFrame: 1,
    });

    setTimeout(() => {
      this.$confetti.stop();
    }, 1500);
  },
};
</script>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const result = computed(() => store.state.result);
const questionsLength = computed(() => store.state.questionsLength);

function commentOutput() {
  if (Math.round((result.value / questionsLength.value) * 100) <= 40) {
    return "Bad, try again";
  } else if (Math.round((result.value / questionsLength.value) * 100) <= 80) {
    return "Well, but you can do better";
  } else {
    return "Excellent, well done";
  }
}
</script>
