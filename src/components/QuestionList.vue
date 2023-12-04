<template>
  <form class="max-w-[50%] w-full flex flex-col gap-y-[15px]">
    <QuestionListItem>
      <template v-slot:number>A</template>
      <template v-slot:title>4.1:1</template>
    </QuestionListItem>
    <QuestionListItem>
      <template v-slot:number>B</template>
      <template v-slot:title>3:1</template>
    </QuestionListItem>
    <QuestionListItem>
      <template v-slot:number>C</template>
      <template v-slot:title>2.5:1</template>
    </QuestionListItem>
    <QuestionListItem>
      <template v-slot:number>D</template>
      <template v-slot:title>5:1</template>
    </QuestionListItem>
    <button class="font-bold text-center p-[25px] w-full flex items-center justify-center rounded-[20px] bg-purple mt-[15px]" type="submit">Submit answer</button>
  </form>
</template>

<script setup>
import QuestionListItem from "./QuestionListItem.vue";
</script>
