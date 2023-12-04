<template>
  <header
    class="max-w-[1280px] px-[40px] mx-auto my-0 w-full flex items-center justify-between py-[80px]"
  >
    <div></div>
    <div class="flex items-center gap-x-[10px]">
      <span class="material-symbols-outlined text-[24px] text-white">
        clear_night
      </span>
      <input
        class="transition duration-300 checked:transition checked:duration-300 before:transition before:duration-300 flex items-center justify-start appearance-none relative w-[50px] h-[25px] bg-white rounded-[30px] before:absolute before:w-[19px] before:h-[19px] before:rounded-full before:bg-light-grey cursor-pointer border-[3px] border-white checked:border-purple checked:justify-end checked:before:bg-white checked:bg-purple"
        type="checkbox"
      />
      <span class="material-symbols-outlined text-[24px] text-white"
        >light_mode</span
      >
    </div>
  </header>
</template>

<script setup></script>
