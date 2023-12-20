<template>
  <header
    class="max-w-[1280px] px-[20px] xl:px-[40px] lg:px-[30px] md:px-[30px] mx-auto my-0 w-full flex items-center justify-between py-[30px] xl:py-[80px] lg:py-[60px] md:py-[40px]"
  >
    <div>
      <div v-if="selectedQuiz !== ''" class="flex items-center gap-x-[15px] md:gap-x-[25px]">
        <span
          class="w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-[8px] flex items-center justify-center bg-[#C0D5D3] dark:bg-medium-grey"
        >
          <img src="../assets/vue.svg" alt="" />
        </span>
        <span class="dark:text-white font-bold text-[20px]">{{ selectedQuiz }}</span>
      </div>
    </div>
    <div class="flex items-center gap-x-[10px]">
      <span class="material-symbols-outlined text-[24px] text-[#1C3738] dark:text-white">
        clear_night
      </span>
      <input
        @click="toggleTheme"
        v-model="dark"
        class="transition duration-300 checked:transition checked:duration-300 before:transition before:duration-300 flex items-center justify-start appearance-none relative w-[50px] h-[25px] bg-[#1C3738] dark:bg-white rounded-[30px] before:absolute before:w-[19px] before:h-[19px] before:rounded-full before:bg-[#DAEAE6] dark:before:bg-light-grey cursor-pointer border-[3px] border-[#1C3738] dark:border-white checked:border-purple checked:justify-end checked:before:bg-white checked:bg-purple"
        type="checkbox"
      />
      <span class="material-symbols-outlined text-[24px] text-[#1C3738] dark:text-white"
        >light_mode</span
      >
    </div>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const selectedQuiz = computed(() => store.state.selectedQuiz);
const dark = computed(() => store.state.dark);

// Toggle Theme
function toggleTheme() {
  store.commit("TOGGLE_THEME", !dark.value);
}
</script>
