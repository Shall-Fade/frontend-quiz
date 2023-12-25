<template>
  <ul
    class="relative md:max-w-[50%] w-full flex flex-col gap-y-[15px] max-h-[500px] overflow-y-auto custom-scrollbar h-full"
  >
    <li v-for="quiz in quizzesList">
      <router-link @click="chooseQuiz(quiz.title)" :to="{ path: `/quiz/${quiz.title}` }">
        <MainQuizListItem>
          <template v-slot:image>
            <img :src="[`images/${quiz.image}-icon.svg`]" :alt="quiz.title" />
          </template>
          <template v-slot:title>{{ quiz.title }}</template>
        </MainQuizListItem>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import MainQuizListItem from "./MainQuizListItem.vue";

// Variables
const store = useStore();
const quizzesList = computed(() => store.state.quizzesList);

// Choose a current quiz
function chooseQuiz(value) {
  store.commit("GET_CHOOSE_QUIZ", value);
}
</script>
