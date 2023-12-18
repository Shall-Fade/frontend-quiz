import { createStore } from "vuex";

const store = createStore({
  state: {
    dark: true,
    quizzesList: [
      {
        title: "HTML",
        questions: [
          {
            question: "Что такое HTML?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Не знаю",
              "Таблица стилей",
              "Язык программирования",
            ],
            correct: "Язык гипертекстовой разметки",
          },
          {
            question: "Какой тег используется для создания ссылки?",
            answerOptions: [
              "<h4></h4>",
              "Такого тега не существует",
              "<img>",
              "<a></a>",
            ],
            correct: "<a></a>",
          },
          {
            question: "Что такое тег?",
            answerOptions: [
              "Это не относится к HTML",
              "Встроенная функция JavaScript",
              "Элемент языка разметки гипертекста",
              "Язык программирования",
            ],
            correct: "Элемент языка разметки гипертекста",
          },
        ],
      },
      {
        title: "Javascript",
        questions: [
          {
            question: "Что такое JavaScript?",
            answerOptions: [
              "Язык гипертекстовой разметки",
              "Язык программирования",
              "Таблица стилей",
              "CMS",
            ],
            correct: "Язык программирования",
          },
          {
            question: "Какая функция в JavaScript выводит сообщения в консоль?",
            answerOptions: [
              "write()",
              "def()",
              "print()",
              "console.log()",
            ],
            correct: "console.log()",
          },
          {
            question: "В каком стиле именуются переменные в JS?",
            answerOptions: [
              "kebab-case",
              "camelCase",
              "snake_case",
              "PascalCase",
            ],
            correct: "camelCase",
          },
          {
            question: "Ключевое слово для создания цикла со счетчиком в JavaScript",
            answerOptions: [
              "for",
              "while",
              "do while",
              "if",
            ],
            correct: "for",
          },
          {
            question: "Какое ключевое слово лишнее (для создания переменной) в JavaScript?",
            answerOptions: [
              "var",
              "let",
              "create",
              "const",
            ],
            correct: "create",
          },
        ],
      },
      {
        title: "Adaptive",
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
              "Не знаю",
              "Язык гипертекстовой разметки",
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
    TOGGLE_THEME(state, dark) {
      state.dark = dark;
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
