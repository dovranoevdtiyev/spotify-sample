<template>
  <div>
    <div
      class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
    >
      <div class="items-center ml-6 flex">
        <button
          type="button"
          class="rounded-full mr-4 bg-black p-[1px] cursor-pointer"
        >
          <ChevronLeft fillColor="#FFFFFF" :size="30" class="" />
        </button>
        <button
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" class="" />
        </button>
      </div>
      <router-link
        class="bg-black hover:bg-[#282828] rounded-full p-0,5 mr-8 mt-0,5 cursor-pointer"
        to="/profile"
      >
        <div class="flex items-center">
          <img
            src="./assets/download.jpeg"
            class="rounded-full"
            width="27"
            alt=""
          />
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import { ref } from "vue";
let openMenu = ref(false);
</script>
