<template>
    <button class="p-[20px] w-full flex items-center gap-x-[25px] rounded-[20px] bg-[#DAEAE6] dark:bg-light-grey cursor-pointer transition duration-150 hover:opacity-[70%]" type="button">
        <span class="w-[50px] h-[50px] rounded-[8px] flex items-center justify-center bg-[#C0D5D3] dark:bg-medium-grey">
            <slot name="number"></slot>
        </span>
        <span class="dark:text-white font-bold text-[18px] sm:text-[20px] text-start"><slot name="title"></slot></span>
    </button>
</template>

<script setup>
</script>