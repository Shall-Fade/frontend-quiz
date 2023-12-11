<template>
  <section
    class="max-w-[1280px] px-[40px] mx-auto my-0 w-full flex items-start justify-between gap-x-[80px]"
  >
    <div v-if="isLoading" class="max-w-[50%] w-full">
      <button
        @click="$router.go(-1)"
        class="flex items-center gap-x-[5px] text-[16px] mb-[25px]"
        type="button"
      >
        <span class="material-symbols-outlined text-white text-[20px]"
          >keyboard_backspace</span
        >
        Back
      </button>
      <span class="block text-[16px] text-casper italic mb-[35px]"
        >Question {{ currentQuestionIndex + 1 }} of
        {{ currentQuestions.questions.length }}</span
      >
      <h2 class="text-[32px] font-bold text-white">
        {{ currentQuestions.questions[currentQuestionIndex].question }}
      </h2>
      <div
        class="flex items-center relative h-[15px] rounded-[35px] bg-light-grey mt-[100px] w-full"
      >
        <div
          class="border-light-grey h-full bg-purple rounded-[35px] border-[4px]"
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
