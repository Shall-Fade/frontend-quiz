<template>
  <section
    class="max-w-[1280px] px-[20px] xl:px-[40px] lg:px-[30px] md:px-[30px] mx-auto my-0 w-full flex items-start justify-between flex-col md:flex-row gap-x-[20px] xl:gap-x-[80px] lg:gap-x-[40px]"
  >
    <div v-if="isLoading" class="md:max-w-[50%] w-full mb-[60px] md:mb-0">
      <button
        @click="$router.go(-1)"
        class="flex items-center gap-x-[5px] text-[16px] mb-[15px] md:mb-[25px]"
        type="button"
      >
        <span class="material-symbols-outlined text-[#1C3738] dark:text-white text-[20px]"
          >keyboard_backspace</span
        >
        Back
      </button>
      <span class="block text-[16px] text-[#354040] dark:text-casper italic mb-[20px] md:mb-[35px]"
        >Question {{ currentQuestionIndex + 1 }} of
        {{ currentQuestions.questions.length }}</span
      >
      <h2 class="sm:text-[32px] text-[20px] font-bold dark:text-white">
        {{ currentQuestions.questions[currentQuestionIndex].question }}
      </h2>
      <div
        class="flex items-center relative h-[15px] rounded-[35px] bg-[#DAEAE6] dark:bg-light-grey mt-[30px] md:mt-[100px] w-full"
      >
        <div
          class="border-[#DAEAE6] dark:border-light-grey h-full bg-[#A1A4A0] dark:bg-purple rounded-[35px] border-[4px]"
          :style="`width: ${Math.round(
            100 /
              (currentQuestions.questions.length / (currentQuestionIndex + 1))
          )}%`"
        ></div>
      </div>
    </div>
    <QuestionList
      :current-questions="currentQuestions"
      :is-loading="isLoading"
    />
  </section>
</template>

<script setup>
import QuestionList from "../components/QuestionList.vue";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

// Variables
const store = useStore();
const selectedQuiz = computed(() => store.state.selectedQuiz);
const quizzesList = computed(() => store.state.quizzesList);
const currentQuestionIndex = computed(() => store.state.currentQuestionIndex);
const isLoading = ref(false);
let currentQuestions = ref("");

onMounted(() => {
  quizzesList.value.forEach((item) => {
    if (item.title === selectedQuiz.value) {
      currentQuestions.value = item;
      isLoading.value = true;
      store.commit("ADD_QUESTIONS_LENGTH", currentQuestions.value.questions.length)
    }
  });
});
</script>
