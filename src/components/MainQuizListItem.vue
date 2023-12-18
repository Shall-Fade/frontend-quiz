<template>
    <div class="p-[20px] w-full flex items-center gap-x-[25px] rounded-[20px] bg-[#DAEAE6] dark:bg-light-grey cursor-pointer transition duration-150 hover:opacity-[70%]">
        <span class="w-[50px] h-[50px] rounded-[8px] flex items-center justify-center bg-[#C0D5D3] dark:bg-medium-grey">
            <slot name="image"></slot>
        </span>
        <span class="dark:text-white font-bold text-[20px]"><slot name="title"></slot></span>
    </div>
</template>

<script setup>

</script>