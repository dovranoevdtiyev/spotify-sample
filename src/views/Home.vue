<template>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recently played
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <Maincard
        image="https://media.pitchfork.com/photos/627d5cd4b03451e62efc1969/1:1/w_600/chainsmokers_so_far_so_good.jpeg"
        title="So far, so good"
        subTitle="The Chainsmokers"
      />
      <Maincard
        image="https://i.scdn.co/image/ab67616d0000b2735e90ff76fd49a23f7333de76"
        title="World war joy"
        subTitle="The Chainsmokers"
      />
      <Maincard
        image="https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94"
        title="Memories do not open"
        subTitle="The Chainsmokers"
      />
    </div>
  </div>
</template>
<script setup>
import Maincard from "../components/Maincard.vue";
</script>
