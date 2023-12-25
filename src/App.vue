<template>
  <div :class="[dark ? 'dark' : '']">
    <div
      class="bg-[#F4FFF8] dark:bg-medium-grey font-montserrat min-h-screen h-full text-[20px] font-normal text-[#1C3738] dark:text-white"
    >
      <TheHeader />
      <main class="pb-[30px] xl:pb-[80px] lg:pb-[60px] md:pb-[40px]">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./layouts/TheHeader.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

// Variables
const store = useStore();
const dark = computed(() => store.state.dark);
</script>
