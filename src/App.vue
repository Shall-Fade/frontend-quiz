<template>
  <div
    class="bg-medium-grey font-montserrat min-h-screen h-full text-[20px] font-normal text-white"
  >
    <TheHeader />
    <main class="pb-[80px]">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheHeader from "./layouts/TheHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const isLight = computed(() => {
  store.state.isLight;
});
</script>
