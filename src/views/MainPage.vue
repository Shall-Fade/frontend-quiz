<template>
  <section
    class="max-w-[1280px] px-[40px] mx-auto my-0 w-full flex items-start justify-between gap-x-[80px]"
  >
    <div class="max-w-[50%] w-full">
      <h1 class="text-[62px] font-normal leading-none mb-[30px]">
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
