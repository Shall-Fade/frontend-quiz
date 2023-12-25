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
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  linkActiveClass:
    "text-teal laptop:underline laptop:decoration-teal laptop:underline-offset-8",
});

export default router;
