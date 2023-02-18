<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Browse all
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <Categoryselect
        category="Podcasts"
        image="https://i1.sndcdn.com/artworks-RbVrYfaSxarSDjCd-Isx61w-t500x500.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
    </div>
  </div>
</template>
<script setup>
import Categoryselect from "../components/Categoryselect.vue";
</script>
