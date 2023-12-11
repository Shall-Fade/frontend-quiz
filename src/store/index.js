import { createStore } from "vuex";

const store = createStore({
  state: {
    isLight: false,
    quizzesList: [
      {
        title: "HTML",
        questions: [
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 2?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю 3",
              "Какой-то там язык 5",
              "Язык программирования 6",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 3?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
        ],
      },
      {
        title: "Javascript",
        questions: [
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 2?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 3?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
        ],
      },
      {
        title: "Adaptvie",
        questions: [
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 2?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 3?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
        ],
      },
      {
        title: "CSS",
        questions: [
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 2?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Что такое HTML 3?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Какой-то там язык",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
        ],
      },
    ],
    selectedQuiz: "",
    currentQuestionIndex: 0,
    questionsLength: 0,
    result: 0,
  },
  mutations: {
    TOGGLE_THEME(state, isLight) {
      state.isLight = isLight;
    },
    GET_CHOOSE_QUIZ(state, selectedQuiz) {
      state.selectedQuiz = selectedQuiz;
    },
    SUBMIT_QUESTION(state, currentQuestionIndex) {
      state.currentQuestionIndex = currentQuestionIndex;
    },
    GET_CORRECT_ANSWER(state, result) {
      state.result = result;
    },
    ADD_QUESTIONS_LENGTH(state, questionsLength) {
      state.questionsLength = questionsLength;
    },
  },
});

export default store;
