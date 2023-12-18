<template>
  <div v-if="isLoading" class="max-w-[50%] w-full flex flex-col gap-y-[15px]">
    <QuestionListItem
      v-for="(answer, index) in props.currentQuestions.questions[
        currentQuestionIndex
      ].answerOptions"
      @click="addAnswer(answer)"
      :class="[answer === selectedAnswer ? 'bg-[#CBD2CC] dark:bg-purple/[40%]' : '']"
    >
      <template v-slot:number>{{
        index == 0
          ? "A"
          : "" || index == 1
          ? "B"
          : "" || index == 2
          ? "C"
          : "" || index == 3
          ? "D"
          : ""
      }}</template>
      <template v-slot:title>{{ answer }}</template>
    </QuestionListItem>
    <button
      @click="submitQuestion()"
      class="font-bold text-center p-[25px] w-full flex items-center justify-center rounded-[20px] bg-[#CBD2CC] dark:bg-purple mt-[15px]"
      type="button"
    >
      Submit answer
    </button>
  </div>
</template>

<script setup>
import QuestionListItem from "./QuestionListItem.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

// Variables
import router from "../router";
const store = useStore();
const currentQuestionIndex = computed(() => store.state.currentQuestionIndex);
const result = computed(() => store.state.result);
const props = defineProps(["currentQuestions", "isLoading"]);
const selectedAnswer = ref(null);

// Add Answer
function addAnswer(answer) {
  selectedAnswer.value = answer;
}

// Submit Question
function submitQuestion() {
  if (
    currentQuestionIndex.value + 1 <
    props.currentQuestions.questions.length
  ) {
    store.commit("SUBMIT_QUESTION", currentQuestionIndex.value + 1);

    if (
      selectedAnswer.value ===
      props.currentQuestions.questions[currentQuestionIndex.value].correct
    ) {
      store.commit("GET_CORRECT_ANSWER", result.value + 1);
    }

    selectedAnswer.value = null;
  } else {
    router.push("/result");

    if (
      selectedAnswer.value ===
      props.currentQuestions.questions[currentQuestionIndex.value].correct
    ) {
      store.commit("GET_CORRECT_ANSWER", result.value + 1);
    }

    selectedAnswer.value = null;
  }
}
</script>
