<template>
    <button class="p-[20px] w-full flex items-center gap-x-[25px] rounded-[20px] bg-light-grey cursor-pointer transition duration-150 hover:opacity-[70%]" type="button">
        <span class="w-[50px] h-[50px] rounded-[8px] flex items-center justify-center bg-medium-grey">
            <slot name="number"></slot>
        </span>
        <span class="text-white font-bold text-[20px]"><slot name="title"></slot></span>
    </button>
</template>

<script setup>

</script>