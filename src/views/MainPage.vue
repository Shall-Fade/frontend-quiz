<template>
  <section
    class="max-w-[1280px] px-[20px] xl:px-[40px] lg:px-[30px] md:px-[30px] mx-auto my-0 w-full flex items-start justify-between flex-col md:flex-row gap-x-[20px] xl:gap-x-[80px] lg:gap-x-[40px]"
  >
    <div class="md:max-w-[50%] w-full text-center md:text-start mb-[30px] md:mb-0">
      <h1
        class="text-[32px] xl:text-[62px] lg:text-[52px] md:text-[38px] font-normal leading-none mb-[15px] md:mb-[30px]"
      >
        Welcome to the
        <span class="block font-bold leading-normal">Frontend Quiz!</span>
      </h1>
      <span class="text-[16px] text-[#354040] dark:text-casper italic"
        >Pick a subject to get started.</span
      >
    </div>
    <MainQuizList />
  </section>
</template>

<script setup>
import MainQuizList from "../components/MainQuizList.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

// Variables
const store = useStore();

onMounted(() => {
  store.commit("GET_CHOOSE_QUIZ", "");
  store.commit("SUBMIT_QUESTION", 0);
  store.commit("ADD_QUESTIONS_LENGTH", 0);
  store.commit("GET_CORRECT_ANSWER", 0);
});
</script>
