<template>
  <section class="max-w-[1280px] px-[40px] mx-auto my-0 w-full flex items-start justify-between gap-x-[80px]">
    <div class="max-w-[50%] w-full">
      <span class="block text-[16px] text-casper italic mb-[35px]">Question 6 of 10</span>
      <h2 class="text-[32px] font-bold text-white">
        Which of these color contrast ratios defines the minimum WCAG 2.1 Level
        AA requirement for normal text?
      </h2>
      <div class="flex items-center justify-center relative w-full h-[15px] rounded-[35px] bg-light-grey mt-[100px] after:absolute after:rounded-[35px] after:left-[6px] after:w-[60%] after:right-[6px] after:h-[8px] after:bg-purple"></div>
    </div>
    <QuestionList />
  </section>
</template>

<script setup>
import QuestionList from "../components/QuestionList.vue";
</script>
