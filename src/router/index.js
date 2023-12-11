import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import QuestionPage from "../views/QuestionPage.vue";
import ResultPage from "../views/ResultPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/quiz/:id",
      component: QuestionPage,
    },
    {
      path: "/result",
      component: ResultPage,
    },
  ],
  linkActiveClass:
    "text-teal laptop:underline laptop:decoration-teal laptop:underline-offset-8",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
