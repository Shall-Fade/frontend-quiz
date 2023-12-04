<template>
  <div class="bg-medium-grey font-montserrat min-h-screen h-full text-[20px] font-normal text-white">
    <TheHeader />
    <main class="pb-[80px]">
      <MainPage />
      <!-- <QuestionPage /> -->
    </main>
  </div>
</template>

<script setup>
import TheHeader from "./layouts/TheHeader.vue";
import MainPage from "./views/MainPage.vue";
import QuestionPage from "./views/QuestionPage.vue";
</script>
