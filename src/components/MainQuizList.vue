<template>
  <ul class="relative max-w-[50%] w-full flex flex-col gap-y-[15px] max-h-[500px] overflow-y-auto custom-scrollbar h-full">
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="HTML" />
        </template>
        <template v-slot:title>HTML</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="CSS" />
        </template>
        <template v-slot:title>CSS</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="Javascript" />
        </template>
        <template v-slot:title>Javascript</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="Accessibility" />
        </template>
        <template v-slot:title>Accessibility</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="CSS" />
        </template>
        <template v-slot:title>CSS</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="Javascript" />
        </template>
        <template v-slot:title>Javascript</template>
      </MainQuizListItem>
    </li>
    <li>
      <MainQuizListItem>
        <template v-slot:image>
          <img src="../assets/vue.svg" alt="Accessibility" />
        </template>
        <template v-slot:title>Accessibility</template>
      </MainQuizListItem>
    </li>
  </ul>
</template>

<script setup>
import MainQuizListItem from "./MainQuizListItem.vue";
</script>
